import HobbiesNav from '../HobbiesNav';
import Image from 'next/image';

export const metadata = {
  title: 'Music | My Hobbies',
};

// Array of Spotify embed URLs to choose from

const spotifyEmbeds = [
  "https://open.spotify.com/embed/track/4NctNkFaMwv4cvgtB7l1JX?utm_source=generator",
  "https://open.spotify.com/embed/track/5Y6nVaayzitvsD5F7nr3DV?utm_source=generator",
  "https://open.spotify.com/embed/track/01vCzM84c5JLSkG2iXC9VZ?utm_source=generator",
  "https://open.spotify.com/embed/track/1E0g6RGjNImtYGXrpKw2Mn?utm_source=generator",
  "https://open.spotify.com/embed/track/1S3D66ibMVgNxOOZLKmhH0?utm_source=generator",
];

function getRandomSpotifyEmbed() {
  return spotifyEmbeds[Math.floor(Math.random() * spotifyEmbeds.length)];
}

export default function MusicPage() {
  const randomSpotifyUrl = getRandomSpotifyEmbed();

  return (
    <div className="ml-3 md:ml-6 px-4 md:px-12 py-6 md:py-10 min-h-screen">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-cabin-glow mb-4 md:mb-8">Hobbies</h1>
        <p className="text-cabin-text text-base md:text-lg">Explore the things I'm passionate about</p>
      </div>

      {/* Navigation Bar */}
      <HobbiesNav activeHobby="music" />

      {/* Hobby Content */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-cabin-glow mb-3 md:mb-4">
              Music
            </h2>
            <p className="text-cabin-text text-base md:text-lg leading-relaxed">
              Music is a universal language that connects people across cultures and experiences. Over time, I’ve developed an appreciation for a wide range of musical styles, exploring hundreds of genres and continuously expanding my listening habits.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="space-y-4 md:space-y-6 text-cabin-text text-base md:text-lg leading-relaxed">
          <p>
            My interest in music began at a young age after hearing Love the Way You Lie for the first time, which sparked a lasting curiosity to discover new sounds and artists. Since then, I’ve enjoyed broadening my musical taste and sharing music with others as a way to connect and exchange perspectives.
          </p>
          <p> Here is a song I have recently been listening to: </p>
          <div className="w-full overflow-hidden" style={{ aspectRatio: "1 / 1.15" }}>
            <iframe data-testid="embed-iframe" style={{ borderRadius: "12px", width: "100%", height: "10%" }} src={randomSpotifyUrl} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>

        

        
      </div>
    </div>
  );
}
