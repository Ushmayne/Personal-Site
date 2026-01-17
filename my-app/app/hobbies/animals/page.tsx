import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';
import AnimalFunFact from './AnimalFunFact';

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
            <h2 className="text-4xl font-bold text-cabin-glow mb-4">
              Learning About Animals
            </h2>
            <p className="text-cabin-text text-lg leading-relaxed">
              My interest in animals began at a young age and was shaped by years of watching educational programming on channels such as Animal Planet and Discovery Channel. I’m fascinated by the diversity of animal life, particularly evolutionary biology, behavioral patterns, and the adaptations that allow species to survive and thrive in unique environments.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-6 text-cabin-text text-lg leading-relaxed">
          <p>
            I enjoy learning about both extinct and modern animals, exploring how different traits emerged in response to environmental pressures over time. I’m also interested in speculative discussions—such as how prehistoric species might interact with the modern world—which highlight the impact of evolution and ecosystem balance.
          </p>
          <p>
            One of the most influential programs from my childhood remains The Crocodile Hunter, hosted by Steve Irwin, whose passion for wildlife education continues to inspire my curiosity and appreciation for the natural world.
          </p>
        </div>

        <AnimalFunFact />
        
      </div>
    </div>
  );
}
