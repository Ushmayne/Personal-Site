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
              { rank: 1, title: 'The Last of Us', description: '2017', time: '18' },
              { rank: 2, title: 'The Witcher 3: Wild Hunt', description: 'It has great story telling, amazing characters, detailed open worlds, meaningful choices and DLCs that are complete games on their own.', time: '95' },
              { rank: 3, title: 'Call Of Duty: Black Ops II', description: '2012', time: 'unknown' },
              { rank: 4, title: 'Destiny', description: '2017', time: '547' },
              { rank: 5, title: 'The Uncharted Series', description: '2020', time: '80' },
              { rank: 6, title: 'League of Legends', description: '2016', time: '4654' },
              { rank: 7, title: 'Dishonored', description: '2018',time: '36' },
              { rank: 8, title: 'Tom Clancy\'s Rainbow 6 Siege', description: '2016',time: '406'  },
              { rank: 9, title: 'Overwatch', description: '1994',time: '332' },
              { rank: 10, title: 'Apex Legends', description: '2016', time: '582' },
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

        {/* Add image placeholder */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
            <p className="text-cabin-muted">Add your gaming image here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
