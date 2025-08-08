import { Disc, Headphones, Music } from "lucide-react"

function HomePage() {
  return (
    <div className="min-h-screen bg-[#E6E1D0] text-[#E68966] font-retro">
      {/* Hero Section */}
      <section id="hero-section" className="min-h-[60vh] text-white flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl uppercase tracking-widest mb-4 flex gap-x-3">
            <span className="hidden xl:flex">
              <Music size={40}/>
            </span>
            Echoes of My Playlist
          </h1>
          <p className="text-xl mb-6">A curated archive of melodies, moods, and memories.</p>
          <button className="px-4 py-2 bg-[#03A6A1] text-white border-2 border-white hover:bg-[#038b87] transition duration-300 cursor-pointer">
            Explore Tracks
          </button>
        </div>
      </section>

      {/* Featured Song Card */}
      <section id="featured-song" className="p-8">
        <h2 className="text-xl mb-4 border-b-2 border-[#E68966] flex gap-3">
          <Headphones size={25}/>
           Featured Song</h2>
        <div className="flex flex-col lg:flex-row bg-[#E6E1D0] border-2 border-[#E68966] shadow-lg p-4">
          <img
            src="https://placehold.co/200"
            alt="Album Art"
            className="border-2 border-[#03A6A1] mb-4 lg:mb-0 lg:mr-6"
          />
          <div>
            <h3 className="text-[#E68966] text-2xl mb-2">“Golden Hour”</h3>
            <p className="text-[#03A6A1] text-xs mb-2">by Kacey Musgraves — Genre: Country Pop</p>
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 border border-[#03A6A1] text-[#03A6A1] text-xs">Warm</span>
              <span className="px-2 py-1 border border-[#FFA673] text-[#FFA673] text-xs">Nostalgic</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-[#03A6A1] text-white border border-[#E68966] text-sm">View Lyrics</button>
              <button className="px-3 py-1 bg-[#FFA673] text-white border border-[#E68966] text-sm">Play Preview</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Filter */}
      <section className="p-8">
        <h2 className="text-xl mb-4 border-b-2 border-[#E68966] flex gap-x-3">
          <Disc size={25}/>
          Filter by Mood</h2>
        <div className="flex flex-wrap gap-2">
          {['Cozy', 'Reflective', 'Uplifting', 'Bittersweet', 'Dreamy'].map((mood) => (
            <button
              key={mood}
              className="px-3 py-1 border-2 border-[#03A6A1] text-[#03A6A1] hover:bg-[#03A6A1] hover:text-white text-sm font-bold transition"
            >
              {mood}
            </button>
          ))}
        </div>
      </section>
    </div>

  )
}

export default HomePage