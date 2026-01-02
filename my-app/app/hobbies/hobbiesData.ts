export const hobbies = [
  {
    id: 'gaming',
    title: 'Gaming',
    icon: '🎮',
    shortDescription: 'I love exploring immersive worlds and challenging myself with strategic gameplay. From competitive games to story-driven adventures, gaming has always been a passion.',
    longDescription: 'Gaming has been a cornerstone of my life since childhood. I enjoy the intricate world-building in story-driven games, the competitive challenge of competitive titles, and the creative problem-solving required in puzzle and strategy games. Whether it\'s getting lost in an RPG, mastering mechanics in a roguelike, or collaborating with friends in multiplayer experiences, games offer a unique blend of entertainment, learning, and achievement that keeps me engaged.',
  },
  {
    id: 'gym',
    title: 'Gym',
    icon: '💪',
    shortDescription: 'Staying fit and healthy is a core part of my routine. I enjoy the discipline, progress tracking, and the mental clarity that comes from regular exercise.',
    longDescription: 'The gym is more than just a place to work out for me—it\'s a sanctuary for personal growth. I track my progress meticulously, setting strength and endurance goals that push me to improve continuously. The discipline required to maintain consistency, the endorphin rush from a great session, and the visible progress in strength and physique are incredibly rewarding. Beyond the physical benefits, the mental clarity and stress relief I get from exercising is invaluable.',
  },
  {
    id: 'lego',
    title: 'Lego',
    icon: '🧱',
    shortDescription: 'Building with Lego is both relaxing and creative. I enjoy the problem-solving aspect and the satisfaction of creating something tangible from instructions.',
    longDescription: 'There\'s something meditative about building with Lego. Following complex instructions requires focus and attention to detail, while the tactile experience of connecting pieces is incredibly satisfying. I enjoy everything from building intricate sets to using Lego for creative projects. It\'s a hobby that combines technical precision with creative expression—much like coding in many ways.',
  },
  {
    id: 'animals',
    title: 'Learning About Animals',
    icon: '🐻',
    shortDescription: 'I\'m fascinated by the diversity of wildlife and animal behavior. Understanding how different species adapt and interact with their environments is endlessly interesting.',
    longDescription: 'Animals represent an incredible diversity of adaptations, behaviors, and survival strategies. I\'m fascinated by evolutionary biology, animal behavior patterns, and how different species have evolved to thrive in their unique environments. Whether it\'s learning about deep-sea creatures, understanding predator-prey relationships, or discovering new species, the natural world offers endless opportunities for wonder and learning.',
  },
  {
    id: 'music',
    title: 'Music',
    icon: '🎵',
    shortDescription: 'Music is a universal language. Whether listening to discover new artists or understanding music production, I appreciate its creative and technical aspects.',
    longDescription: 'Music has the power to move people emotionally and transcend cultural boundaries. I appreciate music from multiple perspectives—the artistry of performers, the technical skill of musicians, the production choices of creators, and the emotional resonance of well-crafted compositions. I enjoy exploring different genres, discovering new artists, and understanding what makes certain pieces resonate with audiences.',
  },
];

export type Hobby = typeof hobbies[0];

export const getHobbyById = (id: string) => {
  return hobbies.find((hobby) => hobby.id === id);
};
