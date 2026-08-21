'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

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

  const duration = projects.length * SECONDS_PER_CARD;

  return (
    <div className="work-carousel">
      <div className="work-carousel-viewport">
        <div
          className="work-carousel-track"
          style={{ animationDuration: `${duration}s`, animationDirection: direction }}
        >
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
