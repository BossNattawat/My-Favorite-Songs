import { Headphones } from "lucide-react";
import Card from "./Card";

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
          <Card key={song.id} song={song}/>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSong;
