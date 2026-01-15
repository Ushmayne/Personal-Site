import HobbiesNav from '../HobbiesNav';
import { getHobbyById, hobbies } from '../hobbiesData';
import { notFound } from 'next/navigation';

interface HobbyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return hobbies.map((hobby) => ({
    id: hobby.id,
  }));
}

export async function generateMetadata({ params }: HobbyPageProps) {
  const { id } = await params;
  const hobby = getHobbyById(id);

  if (!hobby) {
    return {};
  }

  return {
    title: `${hobby.title} | My Hobbies`,
    description: hobby.shortDescription,
  };
}

export default async function HobbyPage({ params }: HobbyPageProps) {
  const { id } = await params;
  const hobby = getHobbyById(id);

  if (!hobby) {
    notFound();
  }

  return (
    <div className="ml-6 px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-cabin-glow mb-8">Hobbies</h1>
        <p className="text-cabin-muted text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby={hobby.id} />

      {/* Hobby Content */}
      <div className="flex items-start gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-cabin-text mb-4">
            {hobby.title}
          </h2>
          <p className="text-cabin-muted text-lg leading-relaxed">
            {hobby.longDescription}
          </p>
          <p className='text-cabin-muted text-lg leading-relaxed'>
            {hobby.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
