import { Hero } from "./sections/Hero";
import { BackgroundImage } from "./sections/BackgroundImage";
import { MusicButton } from "./components/MusicButton";
import { BibleVerse } from './sections/BibleVerse';
import { Countdown } from "./sections/Countdown";

function App() {
  return (
    <>
      <MusicButton />
      <BackgroundImage />
      <Hero />
      <BibleVerse/>
      <Countdown/>
    </>
  );
}

export default App;
