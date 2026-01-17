
export default function Projects() {
  const projects = [
    {
      title: "A-Path-Finding-Visualizer",
      description: "A simple visualizer for the A* pathfinding algorithm written in python using pygame.",
      image: "/astarPath.jpg",
      github: "https://github.com/Ushmayne/A-star-Path-Finding-Visualizer-",
    },
    {
      title: "Cozy Bot",
      description: "Discord bot built with Node.js. It plays music, chats using OpenAI's ChatGPT API, and rewards users with points when interacting. Perfect for chill hangouts, late-night convos, and lo-fi background vibes.",
      image: "/BotPhoto.jpg",
      github: "https://github.com/Ushmayne/discordBot",
    },
    {
      title: "Weather App",
      description: "This is a simple Weather App built in C# that retrieves real-time weather data using an external API.",
      image: "/weatherApp.jpg",
      github: "https://github.com/Ushmayne/Weather-App",
    },
    {
      title: "File Compressor",
      description: "The File Compression System is a Windows application designed to help users easily compress and decompress files.",
      image: "/file_compressor.jpg",
      github: "https://github.com/Ushmayne/File-Compression-Utility",
    },
    {
      title: "Original Portfolio Website",
      description: "My first attempt at building a personal portfolio website to showcase my projects and skills.",
      image: "/ogPort.jpg",
      github: "https://github.com/Ushmayne/portfolio-website",
    },
    {
      title: "Poker Game",
      description: "A poker game built in Java in which the AI can hold or fold, there is also a chance it can bluff.",
      image: "/poker.jpg",
      github: "https://github.com/Ushmayne/Poker",
    },
    {
      title: "Clock Made with OpenGL",
      description: "A simple clock built in OpenGL that displays current system time and updates with each passing second.",
      image: "/clock.jpg",
      github: "https://github.com/Ushmayne/ClockOpenGL",
    },
    {
      title: "Autonomous Vehicle Simulation in Unity",
      description: "The emphasis of this project is on the localization is the ability of the vehicle to pinpoint its location with the map.",
      image: "/auto.jpg",
      github: "https://github.com/Ushmayne/AutonomousVehicle",
    },
  ];

  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-2">Projects</h1>
        <p className="text-cabin-muted text-lg">Here are some of my recent projects, you can check the rest of my projects on <a href="https://github.com/Ushmayne" className="text-cabin-glow">GitHub</a>! </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative bg-cabin-panel rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col border border-cabin-rain hover:border-cabin-muted">
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-cabin-rain to-cabin-panel">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-cabin-text mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-cabin-muted text-sm line-clamp-3 mb-3 flex-1">
                  {project.description}
                </p>

                {/* GitHub Link Badge */}
                <div className="flex items-center gap-2 text-cabin-rain text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}