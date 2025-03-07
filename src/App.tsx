import { Hero } from "./sections/Hero";
import { BackgroundImage } from "./sections/BackgroundImage";
import { MusicButton } from "./components/MusicButton";
import { BibleVerse } from "./sections/BibleVerse";
import { Countdown } from "./sections/Countdown";
import { Locations } from "./sections/Locations";
import ButtonToTop from './components/ButtonToTop';

function App() {
  return (
    <>
      <div id="elements">
        <MusicButton />
        <BackgroundImage />
        <ButtonToTop/>
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
