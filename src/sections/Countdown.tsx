import { motion } from "motion/react";
import { CoutdownTimer } from "../components/CoutdownTimer";
import { Button } from "../components/Button";
import {
  mobileTranslateAnimation,
  translateLeftAnimation,
  translateRightAnimation,
} from "../constants/animations";
import { googleCalendarUrl } from "../constants/google-calendar-url";
import { useIsMobileStore } from "../store/is-mobile-store";

export const Countdown = () => {
  const { isMobile } = useIsMobileStore();

  return (
    <section className="bg-nyanza-4 h-screen flex flex-col gap-4 justify-center items-center">
      <motion.h2
        id="coutdown-date"
        {...(!isMobile ? translateLeftAnimation : mobileTranslateAnimation)}
        className="font-great-vibes text-6xl md:text-7xl text-olive-4"
      >
        Separa la fecha
      </motion.h2>
      <motion.span
        {...(!isMobile ? translateRightAnimation : mobileTranslateAnimation)}
        id="date"
        className="font-montserrat font-thin text-2xl md:text-3xl text-olive-3"
      >
        2 de Noviembre de 2025
      </motion.span>

      <CoutdownTimer isMobile={isMobile} />

      <motion.div
        {...(!isMobile ? translateRightAnimation : mobileTranslateAnimation)}
      >
        <Button
          text="Agendar en google"
          as="a"
          href={googleCalendarUrl}
          targetBlank
        />
      </motion.div>
    </section>
  );
};
