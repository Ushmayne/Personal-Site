'use client';

import Link from 'next/link';

const hobbies = [
  { id: 'gaming', title: 'Gaming', icon: '🎮' },
  { id: 'gym', title: 'Gym', icon: '💪' },
  { id: 'lego', title: 'Lego', icon: '🧱' },
  { id: 'animals', title: 'Learning About Animals', icon: '🐻' },
  { id: 'music', title: 'Music', icon: '🎵' },
];

interface HobbiesNavProps {
  activeHobby?: string;
}

export default function HobbiesNav({ activeHobby }: HobbiesNavProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-2 px-2">
      {hobbies.map((hobby) => (
        <Link
          key={hobby.id}
          href={`/hobbies/${hobby.id}`}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
            activeHobby === hobby.id
              ? 'bg-cabin-rain text-white'
              : 'bg-gray-700 text-cabin-text hover:bg-gray-600'
          }`}
        >
          <span className="font-medium">{hobby.title}</span>
        </Link>
      ))}
    </div>
  );
}
