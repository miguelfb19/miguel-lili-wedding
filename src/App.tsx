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
import { Footer } from "./sections/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBanner } from "./components/HomeBanner";

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
              colorPrimary: "#405EA1",
            },
            Radio: {
              buttonBg: "#AFC9FD",
              buttonSolidCheckedBg: "#405EA1",
              buttonSolidCheckedHoverBg: "#405EA1",
              fontFamily: "Montserrat",
              colorPrimary: "#172A50",
              colorPrimaryHover: "#AFC9FD",
              colorPrimaryActive: "#172A50",
              colorText: "#172A50",
            },
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/main"
              element={
                <div className="fade-in">
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
                    <Footer />
                  </div>
                </div>
              }
            />
            <Route path="/" element={<HomeBanner />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
