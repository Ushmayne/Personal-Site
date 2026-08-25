'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroDiagram from './components/HeroDiagram';
import ProjectsCarousel from './components/ProjectsCarousel';

export type Project = {
  kind: string;
  title: string;
  desc: string;
  tags: string[];
  thumb: string;
  image?: string;
  href: string | null;
};

type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
};

const experience: ExperienceItem[] = [
  { title: 'Web Developer', company: 'Self-employed', duration: 'Jul 2026 – Present' },
  { title: 'Production and Maintenance Supervisor', company: 'Stellantis', duration: 'Jan 2025 – Jul 2026' },
  { title: 'Tech Teacher', company: 'Lakeview Montessori School', duration: 'Oct 2023 – Dec 2024' },
  { title: 'CEO', company: 'Huda Nasir Al-Fadak', duration: 'Feb 2022 – Feb 2024' },
  { title: 'Software Developer', company: 'Canadian Tire Corporation', duration: 'May 2019 – Dec 2019' },
  { title: 'Software Developer', company: 'Papp Plastics & Distributing Ltd.', duration: 'May 2018 – Aug 2018' },
];

const projects: Project[] = [
  {
    kind: 'CLIENT PROJECT',
    title: 'Naveed Legal Suite',
    desc: 'Brand + website for a legal practice, designed and built end to end.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    thumb: 'thumb-1',
    image: '/naveedLegalSuite.JPG',
    href: 'https://www.naveedlegalsuite.com/',
  },
  {
    kind: 'PERSONAL PROJECT',
    title: 'CareLog',
    desc: 'Family care coordination app: Tracks medications, appointments, visit notes, and shared tasks in one hub.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    thumb: 'thumb-2',
    image: '/careLog.jpg',
    href: 'https://github.com/Ushmayne/carelog',
  },
  {
    kind: 'TEAM TOOL',
    title: 'Task tracker',
    desc: 'Team task management app with role-based permissions: assign, track, and complete work across multiple teams.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    thumb: 'thumb-3',
    image: '/taskTracker.png',
    href: 'https://github.com/Ushmayne/Task-Tracker',
  },
  {
    kind: 'AI PROJECT',
    title: 'ChillBot',
    desc: "A Discord bot that streams music, chats via OpenAI's API, and rewards active users with points.",
    tags: ['Node.js', 'discord.js', 'OpenAI API'],
    thumb: 'thumb-4',
    image: '/BotPhoto.jpg',
    href: 'https://github.com/Ushmayne/discordBot',
  },
  {
    kind: 'SIMULATION',
    title: 'Autonomous Vehicle Simulation',
    desc: 'Unity simulation focused on vehicle localization: the full autonomy stack from perception to navigation and path planning.',
    tags: ['Unity', 'C#', 'Simulation'],
    thumb: 'thumb-1',
    image: '/auto.jpg',
    href: 'https://github.com/Ushmayne/AutonomousVehicle',
  },
  {
    kind: 'ALGORITHM VISUALIZER',
    title: 'A* Pathfinding Visualizer',
    desc: 'Interactive visualizer for the A* search algorithm: place walls and watch the algorithm navigate around them in real time.',
    tags: ['Python', 'Pygame'],
    thumb: 'thumb-2',
    image: '/astarPath.jpg',
    href: 'https://github.com/Ushmayne/A-star-Path-Finding-Visualizer-',
  },
  {
    kind: 'PERSONAL PROJECT',
    title: 'Poker Game',
    desc: 'Two-player poker in Java where the AI opponent can hold, fold, or bluff based on hand strength and randomized probability.',
    tags: ['Java'],
    thumb: 'thumb-3',
    image: '/poker.jpg',
    href: 'https://github.com/Ushmayne/Poker',
  },
  {
    kind: 'DESKTOP APP',
    title: 'Weather App',
    desc: 'Windows app in C# that fetches real-time weather data from an external API and displays current conditions.',
    tags: ['C#', '.NET'],
    thumb: 'thumb-4',
    image: '/weatherApp.jpg',
    href: 'https://github.com/Ushmayne/Weather-App',
  },
  {
    kind: 'UTILITY',
    title: 'File Compressor',
    desc: 'Windows utility for compressing and decompressing files: supports drag-and-drop and batch operations.',
    tags: ['C#', '.NET', 'Windows'],
    thumb: 'thumb-1',
    image: '/file_compressor.jpg',
    href: 'https://github.com/Ushmayne/File-Compression-Utility',
  },
  {
    kind: 'GRAPHICS',
    title: 'Clock in OpenGL',
    desc: 'Analog clock rendered entirely in OpenGL that reads system time and updates every second.',
    tags: ['C++', 'OpenGL'],
    thumb: 'thumb-2',
    image: '/clock.jpg',
    href: 'https://github.com/Ushmayne/ClockOpenGL',
  },
  {
    kind: 'PERSONAL PROJECT',
    title: 'Original Portfolio Website',
    desc: 'My first personal portfolio: the starting point that eventually led to this one.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumb: 'thumb-3',
    image: '/ogPort.jpg',
    href: 'https://github.com/Ushmayne/portfolio-website',
  },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .timeline-item');
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="-m-4 md:-m-6" ref={pageRef}>
      <div className="bg-glow" aria-hidden="true"></div>
      <div className="bg-grain" aria-hidden="true"></div>

      <div id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-left reveal">
              <h1 className="hero-title">
                I design &amp; <em>build</em>
                <br />
                to solve real problems.
              </h1>
              <p className="hero-lead">
                Trying to break down problems and solve them without breaking prod.
              </p>
              <div className="hero-ctas">
                <a href="#work" className="btn btn-primary">See the work</a>
                <a href="#contact" className="btn btn-ghost">Start a project with me</a>
              </div>
            </div>

            <div className="hero-right reveal-right" style={{ transitionDelay: '0.15s' }}>
              <HeroDiagram />
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <h2 className="section-title reveal">What I build</h2>

            <div className="build-grid">
              <div className="build-square reveal-scale" style={{ transitionDelay: '0s' }}>
                <video
                  src="/videos/website-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Demo of a website being designed and built"
                />
              </div>
              <div className="build-square reveal-scale" style={{ transitionDelay: '0.08s' }}>
                <video
                  src="/videos/automation-square.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Demo of a manual, repetitive workflow being replaced by an automated one"
                />
              </div>
              <div className="build-square reveal-scale" style={{ transitionDelay: '0.16s' }}>
                <video
                  src="/videos/fullstack-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Demo of a full stack internal team dashboard"
                />
              </div>
              <div className="build-square reveal-scale" style={{ transitionDelay: '0.24s' }}>
                <video
                  src="/videos/anything-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Demo of code being written to solve any kind of software problem"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="wrap">
            <h2 className="section-title reveal">My projects</h2>
            <div className="reveal">
              <ProjectsCarousel projects={projects} />
            </div>
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="wrap">
            <h2 className="section-title reveal">Where I&rsquo;ve worked</h2>

            <div className="timeline">
              {experience.map((job, index) => (
                <div
                  className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                  key={`${job.title}-${job.company}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <span className="timeline-dot" aria-hidden="true"></span>
                  <h3 className="timeline-role">{job.title}</h3>
                  <p className="timeline-meta mono">{job.company} · {job.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="wrap about-grid">
            <div className="about-text reveal-left">
              <h2 className="section-title">A little bit about me</h2>
              <p>
                Outside of work I'm usually at the gym, playing football (soccer), or grinding ranked in League.
                I travel when I can (most recently a month around Japan); the rest of the time I collect random stuff from when I was a kid, mostly Beyblades and Bakugans.

              </p>

            </div>
            <div className="about-photo reveal-right">
              <div className="photo-box">
                <Image src="/usman.JPG" alt="Usman Naveed" fill sizes="(max-width: 720px) 320px, 400px" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-inner reveal">
            <h2 className="section-title">Let&rsquo;s build something.</h2>
            <p className="contact-lead">Got a project, an idea, or just want to say hi? My inbox is open.</p>
            <a className="btn btn-primary" href="mailto:usman.nved@gmail.com">Say hello</a>
            <div className="social-links mono">
              <a href="https://github.com/Ushmayne" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/usman-naveed-2b9baa191/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/u_naveed/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
