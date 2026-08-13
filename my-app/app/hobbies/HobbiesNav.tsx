'use client';

import Link from 'next/link';

const hobbies = [
  { id: 'gaming', title: 'Gaming' },
  { id: 'gym', title: 'Gym' },
  { id: 'lego', title: 'Lego' },
  { id: 'animals', title: 'Animals' },
  { id: 'music', title: 'Music' },
];

interface HobbiesNavProps {
  activeHobby?: string;
}

export default function HobbiesNav({ activeHobby }: HobbiesNavProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-2 px-2 border-b border-cabin-rain/20">
      {hobbies.map((hobby) => (
        <Link
          key={hobby.id}
          href={`/hobbies/${hobby.id}`}
          className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold transition-all border ${
            activeHobby === hobby.id
              ? 'bg-cabin-panel border-cabin-glow text-cabin-glow shadow-[inset_0_-3px_0_#c9a66b]'
              : 'bg-cabin-panel border-cabin-rain text-cabin-muted hover:text-cabin-text hover:border-cabin-text'
          }`}
        >
          {hobby.title}
        </Link>
      ))}
    </div>
  );
}
