import { Disc } from "lucide-react"
import Hero from "../components/Homepage/Hero"
import FeaturedSong from "../components/Homepage/FeaturedSong"

function HomePage() {
  return (
    <main className="min-h-screen bg-[#E6E1D0] text-[#383a3c] font-retro">
      <Hero/>
      {/* Featured Song Card */}
      <FeaturedSong/>
      {/* Mood Filter */}
      <section id="mood_filter" className="p-8">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-3 border-[#383a3c] flex gap-x-3">
          <Disc size={30}/>
          Filter by Mood
        </h2>
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
    </main>

  )
}

export default HomePage