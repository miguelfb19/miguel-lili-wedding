import { Carousel } from "antd";
import { motion } from "motion/react";
import { useIsMobileStore } from "../store/is-mobile-store";
import {
  mobileTranslateAnimation,
  translateLeftAnimation,
  translateRightAnimation,
} from "../constants/animations";
import { carouselImages } from "../constants/carousel-images";

const imagesClass =
  "h-full w-full object-cover md:object-fill custom-rounded";

export const CarouselSection = () => {
  const { isMobile } = useIsMobileStore();
  return (
    <section className="bg-olive-3 px-5 py-30 md:p-15">
      <motion.div
        {...(isMobile ? mobileTranslateAnimation : translateLeftAnimation)}
      >
        <Carousel
          arrows
          className="m-auto w-[80dvw] xl:w-[70dvw] md:h-[40dvh] xl:h-[100dvh] custom-rounded"
          autoplay
          autoplaySpeed={2500}
        >
          {carouselImages.map((src, index) => (
            <div key={src} className="w-full md:h-[40dvh] xl:h-[95dvh] m-auto custom-rounded">
              <img alt={`Slide ${index}`} src={src} className={imagesClass} loading="lazy"/>
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.h2
        {...(isMobile ? mobileTranslateAnimation : translateRightAnimation)}
        className="font-great-vibes text-5xl md:text-7xl mt-10 text-nyanza-2 w-full text-center"
      >
        Codigo de vestimenta
      </motion.h2>

      <motion.span
        {...(isMobile ? mobileTranslateAnimation : translateLeftAnimation)}
        className="bg-nyanza-3 h-32 md:w-3/5 m-auto flex justify-center items-center p-5 text-center custom-rounded font-montserrat mt-5"
      >
        <p className="text-olive-4">
          Código de vestimenta formal, nos reservamos los colores{" "}
          <strong>
            <span className="text-blue-500">AZUL</span> y{" "}
            <span className="text-white">BLANCO</span>
          </strong>
        </p>
      </motion.span>
    </section>
  );
};
