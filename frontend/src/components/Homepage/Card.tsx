/* eslint-disable @typescript-eslint/no-explicit-any */
function Card({ song } : { song: any }) {
  return (
    <div
      id="card"
      className="flex flex-col lg:flex-row bg-[#eeeeee] rounded-lg shadow-xs p-4"
    >
      <img
        src="https://placehold.co/200"
        alt="Album Art"
        className="border-3 border-[#03A6A1] mb-4 lg:mb-0 lg:mr-6 rounded-lg"
      />
      <div>
        <h3 className="text-[#d35244] text-2xl mb-2">“{song.name}”</h3>
        <p className="text-[#03A6A1] text-lg mb-2">
          by {song.artist} — Genre: {song.genre}
        </p>
        <div className="flex gap-2 mb-4">
          <span className="badge badge-soft badge-accent">Warm</span>
          <span className="badge badge-soft badge-accent">Nostalgic</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-[#03A6A1] hover:bg-[#038b87] transition duration-300 text-white border border-[#03A6A1] text-sm">
            View Lyrics
          </button>
          <button className="px-3 py-1 bg-[#d35244] hover:bg-[#bb493c] transition duration-300 text-white border border-[#d35244] text-sm">
            Play Preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
