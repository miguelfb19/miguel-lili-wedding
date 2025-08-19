import { Carousel } from "antd";
import { motion } from "motion/react";
import { useIsMobileStore } from "../store/is-mobile-store";
import {
  mobileTranslateAnimation,
  translateLeftAnimation,
  translateRightAnimation,
} from "../constants/animations";

const imagesClass =
  "h-[15rem] md:h-[25rem] aspect-video object-cover m-auto custom-rounded";

export const CarouselSection = () => {
  const { isMobile } = useIsMobileStore();
  return (
    <section className="bg-olive-3 px-5 py-50 md:p-15">
      <motion.div
        {...(isMobile ? mobileTranslateAnimation : translateLeftAnimation)}
      >
        <Carousel arrows className="md:w-[50%] m-auto" autoplay>
          <img src="/pictures/horizontal1.jpeg" className={imagesClass} />
          <img src="/pictures/vertical1.jpeg" className={imagesClass} />
          <img src="/pictures/vertical2.jpeg" className={imagesClass} />
          <img src="/pictures/vertical3.jpeg" className={imagesClass} />
          <img src="/pictures/vertical4.jpeg" className={imagesClass} />
          <img src="/pictures/vertical5.jpeg" className={imagesClass} />
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
        className="bg-nyanza-4 h-32 md:w-3/5 m-auto flex justify-center items-center p-5 text-center custom-rounded font-montserrat mt-5"
      >
        <p>
          Código de vestimenta formal, nos reservamos los colores{" "}
          <strong>AZUL Y BLANCO</strong>
        </p>
      </motion.span>
    </section>
  );
};
