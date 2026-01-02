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
            <h2 className="text-4xl font-bold text-cabin-text mb-4">
              Music
            </h2>
            <p className="text-cabin-muted text-lg leading-relaxed">
              Music is a universal language. Whether listening to discover new artists or understanding music production, I appreciate its creative and technical aspects.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-muted text-lg leading-relaxed">
          <p>
            Music has the power to move people emotionally and transcend cultural boundaries. I appreciate music from multiple perspectives—the artistry of performers, the technical skill of musicians, the production choices of creators, and the emotional resonance of well-crafted compositions.
          </p>
          <p>
            I enjoy exploring different genres, discovering new artists, and understanding what makes certain pieces resonate with audiences. Whether it's the complexity of orchestral arrangements or the simplicity of acoustic melodies, music continues to inspire and teach me.
          </p>
        </div>

        {/* Add image placeholder */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
            <p className="text-cabin-muted">Add your music image here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
