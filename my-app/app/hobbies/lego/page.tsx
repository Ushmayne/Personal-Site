import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';

export const metadata = {
  title: 'Lego | My Hobbies',
};

export default function LegoPage() {
  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-8">Hobbies</h1>
        <p className="text-cabin-text text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby="lego" />

      {/* Hobby Content */}
      <div className="mb-12">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-cabin-glow mb-4">
              Lego
            </h2>
            <p className="text-cabin-text text-lg leading-relaxed">
              I began building LEGO sets as an adult, with my earliest hands-on experience coming from assembling household furniture. What started as a practical skill quickly became a rewarding hobby that helps me relax and focus, providing a calm, structured way to step away from everyday distractions.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-text text-lg leading-relaxed">
          <p>
            I enjoy the problem-solving aspect of each build and the satisfaction of creating a tangible final result. LEGO building combines technical precision with creative expression—much like software development—where patience, attention to detail, and logical sequencing are essential. Each project feels like a journey, with the completed build serving as a reflection of careful planning and persistence.
          </p>
          <p>
            One of my favorite sets is the Batmobile: Batman vs. The Joker, inspired by my appreciation for Batman as a character.
          </p>
        </div>
      </div>
    </div>
  );
}
