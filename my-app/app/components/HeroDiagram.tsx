'use client';

import { useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';

const SIZE = 400;
const CENTER = SIZE / 2;
const PAD = 22;
const HANDLE_R = 7;
const CORNER_HANDLE_R = 6;
const CORNER_ARM = 36;
const CORNER_MIN = 26;
const CORNER_MAX = CENTER - 12;
const DEFAULT_RADIUS = 100;
const DEFAULT_CORNER = { dx: CENTER - 22, dy: CENTER - 22 };

type Point = { x: number; y: number };
type Sign = 1 | -1;

type Drag =
  | { mode: 'vertex'; index: number }
  | { mode: 'move'; start: Point; startPoints: Point[] }
  | { mode: 'corner'; signX: Sign; signY: Sign };

const CORNERS: { signX: Sign; signY: Sign }[] = [
  { signX: -1, signY: -1 }, // top-left
  { signX: 1, signY: -1 }, // top-right
  { signX: -1, signY: 1 }, // bottom-left
  { signX: 1, signY: 1 }, // bottom-right
];

function hexagon(cx: number, cy: number, r: number): Point[] {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

function clamp(v: number) {
  return Math.max(PAD, Math.min(SIZE - PAD, v));
}

function clampCorner(v: number) {
  return Math.max(CORNER_MIN, Math.min(CORNER_MAX, v));
}

// Corner bracket vertex + its inward-pointing arms, mirrored off one shared
// (dx, dy) offset from center so dragging any corner moves all four at once.
function cornerPath(signX: Sign, signY: Sign, dx: number, dy: number) {
  const vx = CENTER + signX * dx;
  const vy = CENTER + signY * dy;
  const armX = vx - signX * CORNER_ARM;
  const armY = vy - signY * CORNER_ARM;
  return { vx, vy, path: `M ${vx} ${armY} L ${vx} ${vy} L ${armX} ${vy}` };
}

export default function HeroDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<Drag | null>(null);

  const [points, setPoints] = useState<Point[]>(() => hexagon(CENTER, CENTER, DEFAULT_RADIUS));
  const [corner, setCorner] = useState(DEFAULT_CORNER);
  const [hint, setHint] = useState(true);

  function handleReset() {
    setPoints(hexagon(CENTER, CENTER, DEFAULT_RADIUS));
    setCorner(DEFAULT_CORNER);
    setHint(true);
  }

  function toSvgPoint(clientX: number, clientY: number): Point {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: ((clientX - rect.left) / rect.width) * SIZE,
      y: ((clientY - rect.top) / rect.height) * SIZE,
    };
  }

  function onVertexDown(e: ReactPointerEvent<SVGCircleElement>, index: number) {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    setHint(false);
    drag.current = { mode: 'vertex', index };
  }

  function onShapeDown(e: ReactPointerEvent<SVGPolygonElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setHint(false);
    drag.current = { mode: 'move', start: toSvgPoint(e.clientX, e.clientY), startPoints: points };
  }

  function onCornerDown(e: ReactPointerEvent<SVGCircleElement>, signX: Sign, signY: Sign) {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    setHint(false);
    drag.current = { mode: 'corner', signX, signY };
  }

  function onPointerMove(e: ReactPointerEvent<SVGSVGElement>) {
    const active = drag.current;
    if (!active) return;
    const p = toSvgPoint(e.clientX, e.clientY);

    if (active.mode === 'vertex') {
      const { index } = active;
      setPoints((prev) => prev.map((pt, i) => (i === index ? { x: clamp(p.x), y: clamp(p.y) } : pt)));
      return;
    }

    if (active.mode === 'corner') {
      const { signX, signY } = active;
      // Mirrored across both axes: whichever corner is grabbed, its distance
      // from center drives all four — dragging one reflects the other three.
      setCorner({
        dx: clampCorner((p.x - CENTER) * signX),
        dy: clampCorner((p.y - CENTER) * signY),
      });
      return;
    }

    const { start, startPoints } = active;
    const minX = Math.min(...startPoints.map((pt) => pt.x));
    const maxX = Math.max(...startPoints.map((pt) => pt.x));
    const minY = Math.min(...startPoints.map((pt) => pt.y));
    const maxY = Math.max(...startPoints.map((pt) => pt.y));
    const dx = Math.max(PAD - minX, Math.min(SIZE - PAD - maxX, p.x - start.x));
    const dy = Math.max(PAD - minY, Math.min(SIZE - PAD - maxY, p.y - start.y));
    setPoints(startPoints.map((pt) => ({ x: pt.x + dx, y: pt.y + dy })));
  }

  function onPointerUp(e: ReactPointerEvent<SVGSVGElement>) {
    drag.current = null;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {
      // pointer already released
    }
  }

  const pointsAttr = points.map((p) => `${p.x},${p.y}`).join(' ');
  const corners = CORNERS.map((c) => ({ ...c, ...cornerPath(c.signX, c.signY, corner.dx, corner.dy) }));

  return (
    <div className="hero-diagram">
      {hint && <span className="hero-diagram-hint mono">DRAG TO RESHAPE</span>}
      <button type="button" className="hero-diagram-reset mono" onClick={handleReset}>
        RESET
      </button>
      <svg
        ref={svgRef}
        className="hero-diagram-svg"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <defs>
          <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--line-soft)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={SIZE} height={SIZE} fill="url(#heroGrid)" />
        <line x1="0" y1={SIZE / 2} x2={SIZE} y2={SIZE / 2} stroke="var(--line)" strokeWidth="1" strokeDasharray="3 7" />
        <line x1={SIZE / 2} y1="0" x2={SIZE / 2} y2={SIZE} stroke="var(--line)" strokeWidth="1" strokeDasharray="3 7" />

        {corners.map((c, i) => (
          <path key={i} d={c.path} fill="none" stroke="var(--azure)" strokeWidth="2" />
        ))}

        <polygon className="hero-diagram-shape" points={pointsAttr} onPointerDown={onShapeDown} />
        {points.map((p, i) => (
          <circle
            key={i}
            className="hero-diagram-handle"
            cx={p.x}
            cy={p.y}
            r={HANDLE_R}
            onPointerDown={(e) => onVertexDown(e, i)}
          />
        ))}
        {corners.map((c, i) => (
          <circle
            key={i}
            className="hero-diagram-corner-handle"
            cx={c.vx}
            cy={c.vy}
            r={CORNER_HANDLE_R}
            onPointerDown={(e) => onCornerDown(e, c.signX, c.signY)}
          />
        ))}
      </svg>
    </div>
  );
}
