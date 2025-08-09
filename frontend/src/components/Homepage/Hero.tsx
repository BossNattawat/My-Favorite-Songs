import { Music } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero-section"
      className="min-h-[60vh] text-white flex items-center justify-center text-center px-4"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 flex gap-x-3 justify-center">
          <span className="hidden xl:flex">
            <Music size={40} />
          </span>
          Echoes of My Playlist
        </h1>
        <p className="text-xl mb-6">
          A curated archive of melodies, moods, and memories.
        </p>
        <button className="px-4 py-2 bg-[#03A6A1] text-white border-2 border-white hover:bg-[#038b87] transition duration-300 cursor-pointer">
          Explore Tracks
        </button>
      </div>
    </section>
  );
}

export default Hero;
