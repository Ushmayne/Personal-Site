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
            <h2 className="text-4xl font-bold text-cabin-glow mb-4">
              Gym
            </h2>
            <p className="text-cabin-text text-lg leading-relaxed">
              Staying fit and healthy has become an important part of my lifestyle. I began training consistently in 2022 after realizing my health was limiting my ability to enjoy activities such as longboarding, soccer, and rock climbing. Since then, the gym has become a space for discipline, progress tracking, and mental clarity.
            </p>
            
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-text text-lg leading-relaxed">
          <p>
            I enjoy learning about the human body to optimize my training, experimenting with different exercises and workout splits to understand how my body responds. I am currently following an upper–lower split with a focus on bodybuilding, while also having experience with powerlifting-style training—most notably increasing my deadlift from 405 lbs to 455 lbs within a month.
          </p>
          <p>
            Beyond strength training, I am currently preparing for a Ironman event scheduled for October 2026. This goal continues to reinforce consistency, resilience, and long-term commitment. Wish me luck.
          </p>
          <p>
            You can follow along my fitness journey on my <a href="https://instagram.com/u_naveed" className="text-cabin-glow hover:underline">Instagram</a> page where I post updates on my progress.
          </p>
          
        </div>

        
        
      </div>
    </div>
  );
}
