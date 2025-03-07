import { Hero } from "./sections/Hero";
import { BackgroundImage } from "./sections/BackgroundImage";
import { MusicButton } from "./components/MusicButton";
import { BibleVerse } from "./sections/BibleVerse";
import { Countdown } from "./sections/Countdown";
import { Locations } from "./sections/Locations";

function App() {
  return (
    <>
      <div id="elements">
        <MusicButton />
        <BackgroundImage />
      </div>
      <div id="sections">
        <Hero />
        <BibleVerse />
        <Countdown />
        <Locations />
      </div>
    </>
  );
}

export default App;
