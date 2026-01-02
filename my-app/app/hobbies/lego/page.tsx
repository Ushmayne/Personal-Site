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
            <h2 className="text-4xl font-bold text-cabin-text mb-4">
              Lego
            </h2>
            <p className="text-cabin-muted text-lg leading-relaxed">
              Building with Lego is both relaxing and creative. I enjoy the problem-solving aspect and the satisfaction of creating something tangible from instructions.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-muted text-lg leading-relaxed">
          <p>
            There's something meditative about building with Lego. Following complex instructions requires focus and attention to detail, while the tactile experience of connecting pieces is incredibly satisfying. I enjoy everything from building intricate sets to using Lego for creative projects.
          </p>
          <p>
            It's a hobby that combines technical precision with creative expression—much like coding in many ways. Each build is a journey, and the finished product is a testament to patience and attention to detail.
          </p>
        </div>

        {/* Add image placeholder */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
            <p className="text-cabin-muted">Add your Lego image here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
