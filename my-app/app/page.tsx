'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
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
  { title: 'Freelance Web Developer', company: 'Self-employed', duration: 'Jul 2026 – Present' },
  { title: 'Production and Maintenance Supervisor', company: 'Stellantis', duration: 'Jan 2025 – Present' },
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

const PROJECTS_PAGE_SIZE = 4;

export default function Home() {
  const [projectPage, setProjectPage] = useState(0);
  const totalProjectPages = Math.ceil(projects.length / PROJECTS_PAGE_SIZE);
  const visibleProjects = projects.slice(
    projectPage * PROJECTS_PAGE_SIZE,
    projectPage * PROJECTS_PAGE_SIZE + PROJECTS_PAGE_SIZE
  );

  return (
    <div className="-m-4 md:-m-6">
      <div className="bg-glow" aria-hidden="true"></div>
      <div className="bg-grain" aria-hidden="true"></div>

      <div id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-left">
              <h1 className="hero-title">
                I design &amp; <em>build</em>. Sometimes it even ships!
              </h1>
              <p className="hero-lead">
                Trying to break down problems and solve them without breaking prod.
              </p>
              <div className="hero-ctas">
                <a href="#work" className="btn btn-primary">See the work</a>
                <a href="#contact" className="btn btn-ghost">Build a site with me</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="spec-card">
                <div className="spec-head">
                  <span className="spec-head-label mono">DRAWING — U.N / PROFILE</span>
                  <span className="status-dot" aria-hidden="true"></span>
                </div>
                <dl className="spec-rows">
                  <div className="spec-row"><dt>Role</dt><dd>Software developer</dd></div>
                  <div className="spec-row"><dt>Focus</dt><dd>Web · Games · Data</dd></div>
                  <div className="spec-row"><dt>Status</dt><dd className="status-amber">Open to work</dd></div>
                  <div className="spec-row"><dt>Stack</dt><dd>React · Node · Python</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <h2 className="section-title">Two ways to work together</h2>

            <div className="services-grid">
              <article className="service-card">
                <h3>For teams</h3>
                <p className="service-kicker">Software development</p>
                <ul className="plus-list">
                  <li><span className="plus">+</span> Full-stack web apps &amp; internal tools</li>
                  <li><span className="plus">+</span> Data, automation, problem-solving</li>
                  <li><span className="plus">+</span> Clean, documented, maintainable code</li>
                </ul>
                <a href="#work" className="see-link">SEE PROJECTS →</a>
              </article>

              <article className="service-card">
                <h3>For you</h3>
                <p className="service-kicker">I&rsquo;ll build your site</p>
                <ul className="plus-list">
                  <li><span className="plus">+</span> Portfolios &amp; personal brands</li>
                  <li><span className="plus">+</span> Design + build, start to finish</li>
                  <li><span className="plus">+</span> Yours to own — no lock-in</li>
                </ul>
                <a href="#work" className="see-link">SEE PROJECTS →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="wrap">
            <h2 className="section-title">My projects</h2>

            <div className="work-grid">
              {visibleProjects.map((project) => {
                const card = (
                  <>
                    <div className={`thumb ${project.thumb}`}>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
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
                  <a
                    key={project.title}
                    className="project-card"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card}
                  </a>
                ) : (
                  <article key={project.title} className="project-card">
                    {card}
                  </article>
                );
              })}
            </div>

            {totalProjectPages > 1 && (
              <div className="work-nav">
                <button
                  type="button"
                  className="work-arrow"
                  aria-label="Previous projects"
                  disabled={projectPage === 0}
                  onClick={() => setProjectPage((p) => Math.max(0, p - 1))}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="work-nav-count mono">{projectPage + 1} / {totalProjectPages}</span>
                <button
                  type="button"
                  className="work-arrow"
                  aria-label="Next projects"
                  disabled={projectPage === totalProjectPages - 1}
                  onClick={() => setProjectPage((p) => Math.min(totalProjectPages - 1, p + 1))}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="wrap">
            <h2 className="section-title">Where I&rsquo;ve worked</h2>

            <div className="timeline">
              {experience.map((job, index) => (
                <div
                  className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                  key={`${job.title}-${job.company}`}
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
            <div className="about-text">
              <h2 className="section-title">A little bit about me</h2>
              <p>
                Outside of work I'm usually at the gym, playing football (soccer), or grinding ranked in League. 
                I travel when I can (most recently a month around Japan); the rest of the time I collect random stuff from when I was a kid, mostly Beyblades and Bakugans.

              </p>
              <div className="hobby-chips">
                <span className="chip">Gym &amp; lifting</span>
                <span className="chip">Football</span>
                <span className="chip">League of Legends</span>
                <span className="chip">JDM cars</span>
                <span className="chip">Beyblade</span>
                <span className="chip">Travel</span>

              </div>
            </div>
            <div className="about-photo">
              <div className="photo-box">
                <Image src="/usman.JPG" alt="Usman Naveed" fill sizes="(max-width: 720px) 320px, 400px" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-inner">
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

      <footer className="titleblock">
        <div className="wrap">
          <div className="tb-grid">
            <div className="tb-cell">
              <span className="tb-label">Drawn by</span>
              <span className="tb-value">Usman Naveed</span>
            </div>
            <div className="tb-cell">
              <span className="tb-label">Title</span>
              <span className="tb-value">Portfolio</span>
            </div>
            <div className="tb-cell">
              <span className="tb-label">Rev</span>
              <span className="tb-value">2026.1</span>
            </div>
            <div className="tb-cell">
              <span className="tb-label">Scale</span>
              <span className="tb-value">1:1</span>
            </div>
            <div className="tb-cell">
              <span className="tb-label">Sheet</span>
              <span className="tb-value">01/01</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
