import { time } from 'console';
import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';

export const metadata = {
  title: 'Gaming | My Hobbies',
};

export default function GamingPage() {
  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-8">Hobbies</h1>
        <p className="text-cabin-text text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby="gaming" />

      {/* Hobby Content */}
      <div className="mb-12">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-cabin-text mb-4">
              Gaming
            </h2>
            <p className="text-cabin-text text-lg leading-relaxed">
              Gaming has been a meaningful part of my life from a young age, providing both enjoyment and inspiration. Experiencing interactive worlds and well-crafted gameplay is one of the key reasons I pursued software development, with the long-term goal of creating games and experiences that bring the same sense of enjoyment to others.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-text text-lg leading-relaxed">
          <p>
            I have played games across multiple generations and platforms, including the PlayStation 1, PlayStation 2, PlayStation 3, original Game Boy Advance, Xbox One, and currently on Nintendo Switch and PC. This long-term exposure to different hardware generations and ecosystems has given me a broad perspective on how games evolve in terms of performance, controls, interfaces, and player expectations.
          </p>
          <p>
            Over the years, I have played a wide range of games across multiple genres, each offering something unique. I’ve enjoyed the narrative-driven puzzle solving found in series such as Uncharted, the fast-paced competitiveness of shooters like Call of Duty: Black Ops II, and the progression-focused systems and optimization challenges present in games like Destiny. These experiences highlighted how different design choices shape player engagement and replayability.
          </p>
          <p>
            Beyond playing for enjoyment, I actively analyze games from a developer’s perspective. I pay close attention to level design, system mechanics, user experience, art direction, sound design, and replay value. This mindset has strengthened my problem-solving skills, design thinking, and appreciation for clean, well-structured systems—skills that directly translate to software development.
          </p>
          <p>
            Gaming has helped cultivate my creativity, persistence, and analytical approach to building systems. It continues to influence how I learn, design, and develop software today.         
         </p>

        </div>

        {/* Top 10 Games Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-cabin-text mb-2">My Top 10 Games of All Time</h3>
          <p className="text-cabin-text text-lg mb-6">These are the games that I have had the most fun playing over time</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { rank: 1, title: 'The Last of Us', description: 'Compelling storytelling that draws players in from the beginning, paired with relatable and complex characters who evolve throughout the game. It balances tension with thoughtful, light-hearted moments, all set within a meticulously crafted and immersive world.', time: '36' },
              { rank: 2, title: 'The Witcher 3: Wild Hunt', description: 'It has great story telling, amazing characters, detailed open worlds, meaningful choices and DLCs that are complete games on their own.', time: '95' },
              { rank: 3, title: 'Call Of Duty: Black Ops II', description: 'BO2 favorite entry in the series for its fast-paced, skill-driven multiplayer and its highly replayable Zombies mode, featuring well-designed maps, engaging Easter eggs, and a strong narrative.', time: 'unknown' },
              { rank: 4, title: 'Destiny', description: 'Destiny stands out for its rewarding gear progression, beautifully crafted world, and compelling lore. With both engaging PvE experiences and competitive PvP modes, it offers something for every type of player.', time: '547' },
              { rank: 5, title: 'The Uncharted Series', description: 'Uncharted was one of the first story-driven game series I played, featuring a charismatic protagonist and compelling supporting characters. Its cinematic storytelling and engaging puzzles create memorable adventures that challenge both the player’s mind and sense of exploration.', time: '80' },
              { rank: 6, title: 'League of Legends', description: 'League of Legends has been a way for me to connect with friends for over eight years, with each match offering unique strategies and emotional moments. Its annual preseason updates keep the game fresh, and as a Zed one-trick with over 875,000 mastery, I value mastery, mechanics, and continuous improvement.', time: '4654' },
              { rank: 7, title: 'Dishonored', description: 'Dishonored is celebrated for its creative mechanics and the freedom to approach each mission in multiple ways. Its DLC offers a unique perspective by letting players experience the story as the antagonist, adding depth and variety to the game.',time: '36' },
              { rank: 8, title: 'Tom Clancy\'s Rainbow 6 Siege', description: 'Tom Clancy’s Rainbow Six Siege stands out as a high-stakes competitive shooter that emphasizes teamwork and strategy. Coordinating with friends to plan site setups and execute round strategies, combined with well-balanced and uniquely designed maps, creates a consistently engaging and tactical experience.',time: '406'  },
              { rank: 9, title: 'Overwatch', description: 'Overwatch stands out for its diverse and well-designed heroes, allowing players with different playstyles to enjoy the game. Its polished maps, distinctive art style, and high-quality cinematics combine to deliver strong visual storytelling and a memorable world.',time: '332' },
              { rank: 10, title: 'Apex Legends', description: 'Apex Legends is a fast-paced battle royale game known for its unique characters, each with their own abilities, and its emphasis on team play and strategy. Its dynamic gameplay and regular updates keep the experience fresh and engaging.', time: '582' },
            ].map((game) => (
              <div
                key={game.rank}
                className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cabin-glow transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-cabin-glow font-bold text-xl min-w-fit">
                    #{game.rank}
                  </span>
                  <div>
                    <p className="text-cabin-text font-semibold">{game.title}</p>
                    <p className="text-cabin-muted text-sm">{game.description}</p>
                    <p className="text-cabin-muted text-sm">Hours Wasted: {game.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}
