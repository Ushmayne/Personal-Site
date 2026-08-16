import Image from 'next/image';
import { Protractor, DraftingCompass, SetSquare } from './components/BlueprintTools';

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
    desc: 'Family care coordination app — medications, appointments, visit notes, and shared tasks in one hub.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    thumb: 'thumb-2',
    image: '/careLog.jpg',
    href: 'https://github.com/Ushmayne/carelog',
  },
  {
    kind: 'TEAM TOOL',
    title: 'Task tracker',
    desc: 'Team task management app with role-based permissions — assign, track, and complete work across multiple teams.',
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
];

export default function Home() {
  return (
    <div className="-m-4 md:-m-6">
      <div className="grid-bg" aria-hidden="true"></div>

      <div id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-left">
              <p className="eyebrow annot">
                <span className="fig-tag">FIG.01</span> — INDEX
              </p>
              <div className="dim-line annot">
                <span className="dim-tick"></span>
                <span className="dim-rule"></span>
                <span className="dim-label">01 · PROFILE — SCALE 1:1</span>
                <span className="dim-rule"></span>
                <span className="dim-tick"></span>
              </div>
              <h1 className="hero-title">
                I design &amp; <em>build</em> things worth sharing.
              </h1>
              <p className="hero-lead">
                I&rsquo;m a software developer who&rsquo;s curious by nature — I break problems down and think a few
                steps ahead, then build the thing properly so it&rsquo;s actually worth using.
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
              <Protractor className="bp-tool bp-tool-protractor annot" />
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <p className="eyebrow annot">
              <span className="fig-tag">FIG.02</span> — SERVICES
            </p>
            <h2 className="section-title">Two ways to work together</h2>

            <div className="services-grid">
              <article className="service-card">
                <span className="dwg-label annot mono">DWG-02A</span>
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
                <span className="dwg-label annot mono">DWG-02B</span>
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
            <p className="eyebrow annot">
              <span className="fig-tag">FIG.03</span> — SELECTED WORK
            </p>
            <h2 className="section-title">My projects</h2>

            <div className="work-grid">
              {projects.map((project) => {
                const card = (
                  <>
                    <div className={`thumb ${project.thumb}`}>
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                          className="thumb-img"
                        />
                      ) : (
                        <span className="frame-dashed annot" aria-hidden="true"></span>
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
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="wrap">
            <p className="eyebrow annot">
              <span className="fig-tag">FIG.04</span> — EXPERIENCE
            </p>
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
              <p className="eyebrow annot">
                <span className="fig-tag">FIG.05</span> — ABOUT
              </p>
              <h2 className="section-title">The person behind the code</h2>
              <p>
                Outside of work I&rsquo;m usually at the gym, chasing a volleyball on the beach, or elbow-deep in a
                JDM project car that doesn&rsquo;t really need more attention. I collect things I probably don&rsquo;t
                need and still fire up a retro console more often than I&rsquo;d admit. Same curiosity that drives
                the code — I just like taking things apart to understand how they work.
              </p>
              <div className="hobby-chips">
                <span className="chip">Gym &amp; lifting</span>
                <span className="chip">Beach volleyball</span>
                <span className="chip">JDM cars</span>
                <span className="chip">Retro gaming</span>
                <span className="chip">Collecting</span>
              </div>
              <DraftingCompass className="bp-tool bp-tool-compass annot" />
            </div>
            <div className="about-photo">
              <div className="photo-box">
                <Image src="/usman.JPG" alt="Usman Naveed" fill sizes="(max-width: 720px) 320px, 400px" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <SetSquare className="bp-tool bp-tool-square annot" />
          <div className="wrap contact-inner">
            <p className="eyebrow annot">
              <span className="fig-tag">FIG.06</span> — CONTACT
            </p>
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
