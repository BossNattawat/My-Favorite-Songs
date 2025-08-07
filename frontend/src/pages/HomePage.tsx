import { Disc, Headphones } from "lucide-react"

function HomePage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-[#B9B28A] to-[#F8F3D9] text-white">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Echoes of My Playlist</h1>
            <p className="py-6 text-lg">
              A curated archive of melodies, moods, and memories.
            </p>
            <button className="btn btn-accent">Explore Songs</button>
          </div>
        </div>
      </section>

      {/* Featured Song Card */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-4 flex gap-x-3">
            <Headphones size={30}/>
            Featured Song
        </h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placehold.co/200" alt="Album Art" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">“Midnight City”</h3>
            <p>by M83 — Genre: Synthpop</p>
            <div className="badge badge-info mr-2">Euphoric</div>
            <div className="badge badge-secondary">Retro</div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-outline btn-sm">View Lyrics</button>
              <button className="btn btn-primary btn-sm">Play Preview</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Filter */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4 flex gap-x-3">
            <Disc size={30}/>
            Filter by Mood
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Chill', 'Nostalgic', 'Energetic', 'Melancholic', 'Romantic'].map((mood) => (
            <button key={mood} className="btn btn-sm btn-outline">
              {mood}
            </button>
          ))}
        </div>
      </section>
    </div>

  )
}

export default HomePage