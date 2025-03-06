import { motion } from "motion/react";
import { CoutdownTimer } from "../components/CoutdownTimer";
import { Button } from "../components/Button";
import {
  translateLeftAnimation,
  translateRightAnimation,
} from "../constants/animations";
import { googleCalendarUrl } from "../constants/google-calendar-url";

export const Countdown = () => {
  return (
    <div className="bg-nyanza-4 flex flex-col gap-4 justify-center items-center py-32">
      <motion.h2
        id="coutdown-date"
        {...translateLeftAnimation}
        className="font-great-vibes text-6xl md:text-7xl text-olive-4"
      >
        Separa la fecha
      </motion.h2>
      <motion.span
        {...translateRightAnimation}
        id="date"
        className="font-montserrat font-thin text-2xl md:text-3xl text-olive-3"
      >
        2 de Noviembre de 2025
      </motion.span>

      <CoutdownTimer />

      <motion.div {...translateRightAnimation}>
        <Button
          text="Agendar en google"
          as="a"
          href={googleCalendarUrl}
          targetBlank
        />
      </motion.div>
    </div>
  );
};
