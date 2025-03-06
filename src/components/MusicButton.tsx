import { Music, Pause, Play } from "lucide-react";
import { useState } from "react";

export const MusicButton = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [music] = useState(new Audio("/audio/dos-palomas.mp3"));

  const handleMusic = () => {
    if (isPlay) {
      music.pause();
      setIsPlay(false);
    } else {
      music.play();
      setIsPlay(true);
    }
  };
  return (
    <button
      onClick={handleMusic}
      className="fixed top-5 right-5 z-10 bg-nyanza-3 rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-md shadow-gray-400 scale-3d p-1 active:scale-90 active:shadow-none transition-all text-olive-3"
    >
      <Music />
      {isPlay ? <Pause /> : <Play />}
    </button>
  );
};
