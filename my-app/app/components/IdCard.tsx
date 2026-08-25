'use client';

import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ROPE_LENGTH = 208; // px rest length — keep in sync with the CSS default offsets below
const GRAVITY = 2600; // controls swing speed
const MAX_ANGLE = (75 * Math.PI) / 180; // clamp so the badge can't flip over
const MIN_STRETCH = -50; // px — small amount of upward slack allowed
const MAX_STRETCH = 220; // px — how far down the badge can be pulled
const STRETCH_STIFFNESS = 90; // spring constant pulling the stretch back to 0
const STRETCH_DAMPING = 6.5;

export default function IdCard() {
  const pathname = usePathname();
  const pivotRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<HTMLDivElement>(null);
  const strapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const theta = useRef(0);
  const omega = useRef(0);
  const stretch = useRef(0); // extra length beyond ROPE_LENGTH, driven by vertical drag
  const stretchVel = useRef(0);
  const dragging = useRef(false);
  const running = useRef(false);
  const swingDamping = useRef(1.6);
  const lastFrameTime = useRef(0);
  const lastPointerTime = useRef(0);

  const [hint, setHint] = useState(true);
  const [retracted, setRetracted] = useState(false);

  // The strap and card share one "length" value (rope length + stretch) and one
  // rotation (theta), applied the same way to both, so they can never visually
  // separate: whatever direction the swing points and however far it's pulled,
  // both of them follow together, by construction.
  function render() {
    // Negated: CSS rotate() is clockwise-positive on screen, which is the
    // mirror of the atan2(dx, dy) sign below — without this the badge swings
    // opposite the direction it's dragged.
    const deg = -(theta.current * 180) / Math.PI;
    const length = ROPE_LENGTH + stretch.current;

    if (swingRef.current) {
      swingRef.current.style.transform = `rotate(${deg}deg)`;
    }
    if (strapRef.current) {
      strapRef.current.style.height = `${length}px`;
    }
    if (cardRef.current) {
      cardRef.current.style.top = `${length}px`;
      // The plastic glare tilts and slides with the same motion driving the
      // swing/stretch, so the reflection visibly moves with the badge instead
      // of sitting static on top of it.
      cardRef.current.style.setProperty('--glare-tilt', `${deg * 0.7}deg`);
      cardRef.current.style.setProperty('--glare-shift', `${stretch.current * 0.6}px`);
    }
  }

  function tick(now: number) {
    const dt = Math.min((now - lastFrameTime.current) / 1000, 0.032);
    lastFrameTime.current = now;

    if (!dragging.current) {
      const angularAccel =
        -(GRAVITY / ROPE_LENGTH) * Math.sin(theta.current) - swingDamping.current * omega.current;
      omega.current += angularAccel * dt;
      theta.current += omega.current * dt;
      theta.current = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, theta.current));

      const stretchAccel =
        -STRETCH_STIFFNESS * stretch.current - STRETCH_DAMPING * stretchVel.current;
      stretchVel.current += stretchAccel * dt;
      stretch.current += stretchVel.current * dt;

      const settled =
        Math.abs(theta.current) < 0.0008 &&
        Math.abs(omega.current) < 0.0008 &&
        Math.abs(stretch.current) < 0.05 &&
        Math.abs(stretchVel.current) < 0.05;

      if (settled) {
        theta.current = 0;
        omega.current = 0;
        stretch.current = 0;
        stretchVel.current = 0;
        render();
        running.current = false;
        return;
      }
    }

    render();
    requestAnimationFrame(tick);
  }

  function ensureLoop() {
    if (running.current) return;
    running.current = true;
    lastFrameTime.current = performance.now();
    requestAnimationFrame(tick);
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      swingDamping.current = 8;
    }
    render();
  }, []);

  // Hides the badge into the "pocket" on scroll-down, brings it back on
  // scroll-up — direction-based (like a mobile toolbar), not tied to
  // absolute scroll position, except near the very top where it always shows.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function evaluate() {
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 40) {
        setRetracted(false);
      } else if (delta > 4) {
        setRetracted(true);
      } else if (delta < -4) {
        setRetracted(false);
      }
      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function polarFromPointer(clientX: number, clientY: number) {
    const rect = pivotRef.current?.getBoundingClientRect();
    if (!rect) return { angle: theta.current, stretchAmount: stretch.current };
    const dx = clientX - rect.left;
    const dy = clientY - rect.top;
    const angle = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, Math.atan2(dx, dy || 1)));
    const distance = Math.sqrt(dx * dx + dy * dy);
    const stretchAmount = Math.max(MIN_STRETCH, Math.min(MAX_STRETCH, distance - ROPE_LENGTH));
    return { angle, stretchAmount };
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = true;
    omega.current = 0;
    stretchVel.current = 0;
    setHint(false);
    setRetracted(false);
    const { angle, stretchAmount } = polarFromPointer(e.clientX, e.clientY);
    theta.current = angle;
    stretch.current = stretchAmount;
    lastPointerTime.current = performance.now();
    ensureLoop();
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    const now = performance.now();
    const { angle, stretchAmount } = polarFromPointer(e.clientX, e.clientY);
    const dt = Math.max((now - lastPointerTime.current) / 1000, 0.001);
    omega.current = (angle - theta.current) / dt;
    stretchVel.current = (stretchAmount - stretch.current) / dt;
    theta.current = angle;
    stretch.current = stretchAmount;
    lastPointerTime.current = now;
  }

  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pointer already released
    }
  }

  // Homepage-only easter egg — off the hero, other pages don't have the
  // clear space it needs and it ends up sitting on top of real content.
  if (pathname !== '/') return null;

  return (
    <div className="idcard-layer" aria-hidden="true">
      <div className={`idcard-mount${retracted ? ' retracted' : ''}`}>
        <div className="idcard-sway">
          <div className="idcard-pivot" ref={pivotRef}>
            <span className="idcard-clip" />
            <div className={`idcard-retract${retracted ? ' retracted' : ''}`}>
              <div className="idcard-swing" ref={swingRef}>
                <div className="idcard-strap" ref={strapRef} />
                <div
                  className="idcard-card"
                  ref={cardRef}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                >
                  {hint && <span className="idcard-hint mono">DRAG ME</span>}
                  <div className="idcard-hole" />
                  <div className="idcard-inner">
                    <div className="idcard-head">
                      <span className="idcard-tag mono">STAFF ID</span>
                    </div>
                    <div className="idcard-photo">
                      <Image src="/id.jpg" alt="Usman Naveed" fill sizes="170px" />
                    </div>
                    <p className="idcard-name">Usman Naveed</p>
                    <p className="idcard-role mono">SOFTWARE DEVELOPER</p>
                    <dl className="idcard-rows mono">
                      <div>
                        <dt>NO.</dt>
                        <dd>2026-001</dd>
                      </div>
                      <div>
                        <dt>DEPT</dt>
                        <dd>ENGINEERING</dd>
                      </div>
                      <div>
                        <dt>STATUS</dt>
                        <dd className="idcard-status">OPEN TO WORK</dd>
                      </div>
                    </dl>
                    <div className="idcard-barcode" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
