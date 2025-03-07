import { motion } from "motion/react";
import {
  mobileTranslateAnimation,
  translateLeftAnimation,
  translateRightAnimation,
} from "../constants/animations";
import { useIsMobileStore } from "../store/is-mobile-store";

export const BibleVerse = () => {
  const { isMobile } = useIsMobileStore();

  return (
    <section className="w-screen max-md:h-screen md:h-[50vh] bg-olive-3 flex flex-col justify-center items-center gap-5">
      <motion.h2
        {...!isMobile ? translateLeftAnimation : mobileTranslateAnimation}
        className="font-great-vibes text-6xl md:text-7xl text-nyanza-2 text-center"
      >
        Eclesiastés 4, 9-12
      </motion.h2>
      <motion.p
        {...!isMobile ? translateRightAnimation : mobileTranslateAnimation}
        className="font-montserrat text-center w-[80%] text-nyanza-2 leading-7"
      >
        Más valen dos que uno, pues mayor provecho obtienen de su trabajo. Y si
        uno de ellos cae, el otro lo levanta. ¡Pero ay del que cae estando solo,
        pues no habrá quien lo levante! Además, si dos se acuestan juntos, uno a
        otro se calientan; pero uno solo, ¿cómo va a entrar en calor? Uno solo
        puede ser vencido, pero dos podrán resistir. Y además, la cuerda de tres
        hilos no se rompe fácilmente.
      </motion.p>
    </section>
  );
};
