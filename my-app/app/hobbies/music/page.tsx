import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';

export const metadata = {
  title: 'Music | My Hobbies',
};

export default function MusicPage() {
  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-8">Hobbies</h1>
        <p className="text-cabin-text text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby="music" />

      {/* Hobby Content */}
      <div className="mb-12">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-cabin-glow mb-4">
              Music
            </h2>
            <p className="text-cabin-text text-lg leading-relaxed">
              Music is a universal language that connects people across cultures and experiences. Over time, I’ve developed an appreciation for a wide range of musical styles, exploring hundreds of genres and continuously expanding my listening habits.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-text text-lg leading-relaxed">
          <p>
            My interest in music began at a young age after hearing Love the Way You Lie for the first time, which sparked a lasting curiosity to discover new sounds and artists. Since then, I’ve enjoyed broadening my musical taste and sharing music with others as a way to connect and exchange perspectives.
          </p>
        </div>

        
      </div>
    </div>
  );
}
