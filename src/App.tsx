import { Hero } from "./views/Hero";
import { BackgroundImage } from "./views/BackgroundImage";
import { MusicButton } from "./components/MusicButton";
import { BibleVerse } from "./views/BibleVerse";
import { Countdown } from "./views/Countdown";
import { Locations } from "./views/Locations";
import ButtonToTop from "./components/ButtonToTop";
import { CarouselSection } from "./views/CarouselSection";
import { AttendConfirm } from "./views/AttendConfirm";
import { ConfigProvider } from "antd";
import { Footer } from "./views/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBanner } from "./components/HomeBanner";
import { SachetsRain } from "./views/SachetsRain";

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
            Modal:{
              contentBg: "#C4DAFA",
              footerBg: "#C4DAFA",
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
                    <SachetsRain />
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
