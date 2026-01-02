import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';

export const metadata = {
  title: 'Learning About Animals | My Hobbies',
};

export default function AnimalsPage() {
  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-8">Hobbies</h1>
        <p className="text-cabin-text text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby="animals" />

      {/* Hobby Content */}
      <div className="mb-12">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-cabin-text mb-4">
              Learning About Animals
            </h2>
            <p className="text-cabin-muted text-lg leading-relaxed">
              I'm fascinated by the diversity of wildlife and animal behavior. Understanding how different species adapt and interact with their environments is endlessly interesting.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-muted text-lg leading-relaxed">
          <p>
            Animals represent an incredible diversity of adaptations, behaviors, and survival strategies. I'm fascinated by evolutionary biology, animal behavior patterns, and how different species have evolved to thrive in their unique environments.
          </p>
          <p>
            Whether it's learning about deep-sea creatures, understanding predator-prey relationships, or discovering new species, the natural world offers endless opportunities for wonder and learning. Each animal tells a story of adaptation and survival that never ceases to amaze me.
          </p>
        </div>

        {/* Add image placeholder */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
            <p className="text-cabin-muted">Add your animals image here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
