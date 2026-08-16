
type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
  featured?: boolean;
  demo?: string;
};

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="relative bg-cabin-panel rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col border border-cabin-rain hover:border-cabin-glow">
        {/* Image */}
        <div className={`relative w-full ${featured ? 'h-56' : 'h-44'} overflow-hidden bg-gradient-to-br from-cabin-rain to-cabin-panel`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {featured && (
            <span className="absolute top-2 right-2 bg-cabin-glow text-cabin-bg text-xs font-bold px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-cabin-text mb-2">
            {project.title}
          </h3>
          <p className={`text-cabin-muted text-sm mb-3 flex-1 ${featured ? 'line-clamp-4' : 'line-clamp-3'}`}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-cabin-bg border border-cabin-rain text-cabin-rain text-xs px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          <div className="flex items-center gap-1.5 text-cabin-glow text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View on GitHub</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Autonomous Vehicle Simulation",
      description: "Unity simulation focused on vehicle localization — the ability to pinpoint its position on a map using sensor data. Built the full autonomy stack from perception to navigation and path planning.",
      image: "/auto.jpg",
      github: "https://github.com/Ushmayne/AutonomousVehicle",
      tags: ["Unity", "C#", "Simulation"],
      featured: true,
    },
    {
      title: "Cozy Bot",
      description: "Discord bot with music playback, ChatGPT-powered conversation, and a per-user points reward system. Handles voice channel management and maintains state across sessions — built for lo-fi late-night hangouts.",
      image: "/BotPhoto.jpg",
      github: "https://github.com/Ushmayne/discordBot",
      tags: ["Node.js", "Discord.js", "OpenAI API"],
      featured: true,
    },
    {
      title: "A* Pathfinding Visualizer",
      description: "Interactive visualizer for the A* search algorithm — place walls and watch the algorithm navigate around them in real time. Built to make the heuristic logic tangible and easy to understand.",
      image: "/astarPath.jpg",
      github: "https://github.com/Ushmayne/A-star-Path-Finding-Visualizer-",
      tags: ["Python", "Pygame"],
      featured: true,
    },
    {
      title: "Poker Game",
      description: "Two-player poker in Java where the AI opponent can hold, fold, or bluff based on hand strength and randomized probability — making each round feel unpredictable.",
      image: "/poker.jpg",
      github: "https://github.com/Ushmayne/Poker",
      tags: ["Java"],
    },
    {
      title: "Weather App",
      description: "Windows app in C# that fetches real-time weather data from an external API and displays current conditions with a clean UI.",
      image: "/weatherApp.jpg",
      github: "https://github.com/Ushmayne/Weather-App",
      tags: ["C#", ".NET"],
    },
    {
      title: "File Compressor",
      description: "Windows utility for compressing and decompressing files — supports drag-and-drop and batch operations with a straightforward interface.",
      image: "/file_compressor.jpg",
      github: "https://github.com/Ushmayne/File-Compression-Utility",
      tags: ["C#", ".NET", "Windows"],
    },
    {
      title: "Clock in OpenGL",
      description: "Analog clock rendered entirely in OpenGL that reads system time and updates every second — an exercise in real-time graphics and 2D coordinate transforms.",
      image: "/clock.jpg",
      github: "https://github.com/Ushmayne/ClockOpenGL",
      tags: ["C++", "OpenGL"],
    },
    {
      title: "Original Portfolio Website",
      description: "My first personal portfolio — the starting point that eventually led to this one. Built from scratch to learn the fundamentals of web layout and deployment.",
      image: "/ogPort.jpg",
      github: "https://github.com/Ushmayne/portfolio-website",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-2">Projects</h1>
        <p className="text-cabin-muted text-lg">
          Here are some of my recent projects — check the rest on{" "}
          <a href="https://github.com/Ushmayne" className="text-cabin-glow hover:underline">
            GitHub
          </a>.
        </p>
      </div>

      {/* Featured projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featured.map((project, index) => (
          <ProjectCard key={index} project={project} featured />
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-cabin-rain opacity-30" />
        <span className="text-cabin-muted text-sm tracking-wide">More Projects</span>
        <div className="flex-1 h-px bg-cabin-rain opacity-30" />
      </div>

      {/* Rest of projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
