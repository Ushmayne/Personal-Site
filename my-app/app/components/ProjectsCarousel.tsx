'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Project } from '../page';

const SECONDS_PER_CARD = 5;

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <>
      <div className={`thumb ${project.thumb}`}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="320px"
            className="thumb-img"
          />
        )}
      </div>
      <p className="project-kind mono">{project.kind}</p>
      <h3>{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="chips">
        {project.tags.map((tag) => (
          <span className="chip" key={tag}>{tag}</span>
        ))}
      </div>
    </>
  );

  return project.href ? (
    <a className="project-card" href={project.href} target="_blank" rel="noopener noreferrer">
      {card}
    </a>
  ) : (
    <article className="project-card">{card}</article>
  );
}

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');
  const trackRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(direction);
  const hoveredRef = useRef(false);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (reducedMotion) return;
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    let lastTime: number | null = null;
    let rafId: number;

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const setWidth = setWidthRef.current;
      if (setWidth > 0 && !hoveredRef.current) {
        const pxPerSecond = setWidth / (projects.length * SECONDS_PER_CARD);
        const sign = directionRef.current === 'normal' ? -1 : 1;
        let next = offsetRef.current + sign * pxPerSecond * dt;

        if (next <= -setWidth) next += setWidth;
        if (next > 0) next -= setWidth;

        offsetRef.current = next;
        track.style.transform = `translateX(${next}px)`;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, projects.length]);

  if (reducedMotion) {
    return (
      <div className="work-carousel work-carousel-static">
        {projects.map((project) => (
          <div className="work-slide" key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="work-carousel">
      <div
        className="work-carousel-viewport"
        onMouseEnter={() => { hoveredRef.current = true; }}
        onMouseLeave={() => { hoveredRef.current = false; }}
        onFocus={() => { hoveredRef.current = true; }}
        onBlur={() => { hoveredRef.current = false; }}
      >
        <div className="work-carousel-track" ref={trackRef}>
          {[...projects, ...projects].map((project, i) => (
            <div className="work-slide" key={i}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="work-nav">
        <button
          type="button"
          className={`work-arrow${direction === 'reverse' ? ' active' : ''}`}
          aria-label="Rotate carousel backward"
          aria-pressed={direction === 'reverse'}
          onClick={() => setDirection('reverse')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className={`work-arrow${direction === 'normal' ? ' active' : ''}`}
          aria-label="Rotate carousel forward"
          aria-pressed={direction === 'normal'}
          onClick={() => setDirection('normal')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
