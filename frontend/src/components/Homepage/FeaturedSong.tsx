import { Headphones } from "lucide-react";

const mockSongData = [
  {
    id: 1,
    name: "Wildflower",
    artist: "Beach House",
    genre: "Dream Pop",
  },
  {
    id: 2,
    name: "Wildflower",
    artist: "Beach House",
    genre: "Dream Pop",
  },
  {
    id: 3,
    name: "Wildflower",
    artist: "Beach House",
    genre: "Dream Pop",
  },
  {
    id: 4,
    name: "Wildflower",
    artist: "Beach House",
    genre: "Dream Pop",
  },
  {
    id: 5,
    name: "Wildflower",
    artist: "Beach House",
    genre: "Dream Pop",
  },
  {
    id: 6,
    name: "Wildflower",
    artist: "Beach House",
    genre: "Dream Pop",
  },
];

function FeaturedSong() {
  return (
    <section id="featured-song" className="p-8">
      <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-3 border-[#383a3c] flex gap-3">
        <Headphones size={30} />
        Featured Song
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {mockSongData.map((song) => (
          <div
            key={song.id}
            className="flex flex-col lg:flex-row border-4 border-[#d35244] rounded-lg shadow-xs p-4"
          >
            <img
              src="https://placehold.co/200"
              alt="Album Art"
              className="border-3 border-[#03A6A1] mb-4 lg:mb-0 lg:mr-6"
            />
            <div>
              <h3 className="text-[#d35244] text-2xl mb-2">“{song.name}”</h3>
              <p className="text-[#03A6A1] text-lg mb-2">
                by {song.artist} — Genre: {song.genre}
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 border border-[#03A6A1] text-[#03A6A1] text-xs">
                  Warm
                </span>
                <span className="px-2 py-1 border border-[#FFA673] text-[#FFA673] text-xs">
                  Nostalgic
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-[#03A6A1] text-white border border-[#E68966] text-sm">
                  View Lyrics
                </button>
                <button className="px-3 py-1 bg-[#FFA673] text-white border border-[#E68966] text-sm">
                  Play Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSong;
