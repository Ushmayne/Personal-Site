

export default function SpotifyPage() {
    return (
    <div className="px-4 md:px-6 lg:px-12 py-6 md:py-10 min-h-screen md:ml-6">
      <div className="mb-12">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-cabin-glow mb-2">Spotify</h1>
        <p className="text-cabin-muted text-sm sm:text-base lg:text-lg">Page under construction while I wait for a spotify API key</p>
      </div>


      {/* Embed Section */}
      <div className="w-full overflow-hidden" style={{ aspectRatio: "1 / 1.15" }}>
        <iframe data-testid="embed-iframe" style={{ borderRadius: "12px", width: "100%", height: "100%" }} src="https://open.spotify.com/embed/track/52oy0ug2tUPaJHEhbubZ5P?utm_source=generator" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>    
    
      
  );
}