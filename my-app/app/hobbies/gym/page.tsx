import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';

export const metadata = {
  title: 'Gym | My Hobbies',
};

export default function GymPage() {
  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-8">Hobbies</h1>
        <p className="text-cabin-text text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby="gym" />

      {/* Hobby Content */}
      <div className="mb-12">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-cabin-text mb-4">
              Gym
            </h2>
            <p className="text-cabin-muted text-lg leading-relaxed">
              Staying fit and healthy is a core part of my routine. I enjoy the discipline, progress tracking, and the mental clarity that comes from regular exercise.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-muted text-lg leading-relaxed">
          <p>
            The gym is more than just a place to work out for me—it's a sanctuary for personal growth. I track my progress meticulously, setting strength and endurance goals that push me to improve continuously. The discipline required to maintain consistency, the endorphin rush from a great session, and the visible progress in strength and physique are incredibly rewarding.
          </p>
          <p>
            Beyond the physical benefits, the mental clarity and stress relief I get from exercising is invaluable. Whether I'm lifting, doing cardio, or practicing functional fitness, each session is an opportunity to push myself further and build better habits.
          </p>
          
        </div>

        
        {/* Add image placeholder */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
            <p className="text-cabin-muted"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
