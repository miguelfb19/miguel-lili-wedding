import { Music, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

export const MusicButton = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [music, setMusic] = useState<HTMLAudioElement | null>(null);

  // This effect allow auto play when user click anywhere on document, then remove the event listener to avoid errors
  useEffect(() => {
    const audio = new Audio("/audio/dos-palomas.mp3");
    audio.loop = true; // Ensure it loops
    setMusic(audio);

    const playMusic = () => {
      audio.play().catch((e) => console.log("Autoplay blocked:", e));
      setIsPlay(true);

      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  const handleMusic = () => {
    if (!music) return;

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
