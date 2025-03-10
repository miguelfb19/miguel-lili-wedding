import { Hero } from "./sections/Hero";
import { BackgroundImage } from "./sections/BackgroundImage";
import { MusicButton } from "./components/MusicButton";
import { BibleVerse } from "./sections/BibleVerse";
import { Countdown } from "./sections/Countdown";
import { Locations } from "./sections/Locations";
import ButtonToTop from "./components/ButtonToTop";
import { CarouselSection } from "./sections/CarouselSection";
import { AttendConfirm } from "./sections/AttendConfirm";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
    {/* Provider to configurate antd */}
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              arrowSize: 40,
              dotHeight: 7,
            },
            Radio: {
              buttonBg: "#e6f1d5",
              buttonSolidCheckedBg: "#7b9a5e",
              buttonSolidCheckedHoverBg: "#7b9a5e",
              fontFamily: "Montserrat",
              colorPrimaryHover: "#e6f1d5",
              colorPrimary: "#365010",
              colorText: "#365010",
            },
          },
        }}
      >
        <div id="elements">
          <MusicButton />
          <BackgroundImage />
          <ButtonToTop />
        </div>
        <div id="sections">
          <Hero />
          <BibleVerse />
          <Countdown />
          <Locations />
          <CarouselSection />
          <AttendConfirm />
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;
