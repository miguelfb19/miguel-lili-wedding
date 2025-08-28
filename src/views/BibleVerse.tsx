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
    <section className="max-md:h-screen md:h-[50vh] bg-olive-3 flex flex-col justify-center items-center gap-5">
      <motion.h2
        {...(!isMobile ? translateLeftAnimation : mobileTranslateAnimation)}
        className="font-amoresa text-5xl md:text-6xl text-nyanza-1 text-center"
      >
        Colosenses 3, 12-15
      </motion.h2>
      <motion.p
        {...(!isMobile ? translateRightAnimation : mobileTranslateAnimation)}
        className="font-montserrat text-center w-[80%] text-nyanza-1 leading-7"
      >
        Dios los ama a ustedes y los ha escogido para que pertenezcan al pueblo
        santo. Revístanse de sentimientos de compasión, bondad, humildad,
        mansedumbre y paciencia. Sopórtense unos a otros, y perdónense si alguno
        tiene una queja contra otro. Así como el Señor los perdonó, perdonen
        también ustedes.Sobre todo revístanse de amor, que es el lazo de la
        perfecta unión. Y que la paz de Cristo reine en sus corazones, porque
        con este propósito los llamó Dios a formar un solo cuerpo. Y sean
        agradecidos.
      </motion.p>
    </section>
  );
};
