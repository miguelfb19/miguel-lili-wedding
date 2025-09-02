import { useState, useEffect } from "react";
import { Timer } from "../interfaces/timer";
import { getCoutdownTimer } from "../utils/get-coutdown-timer";
import { motion } from "motion/react";
import {
  mobileTranslateAnimation,
  translateLeftAnimation,
} from "../constants/animations";

const countdownBoxesClass =
  "md:p-5 flex flex-col justify-center items-center text-nyanza-1 font-montserrat md:text-4xl h-22 md:h-36 aspect-square";

const coutdownBoxesTextClass = "text-sm";

interface Props {
  className?: string;
  isMobile: boolean;
}

export const CoutdownTimer = ({ className, isMobile }: Props) => {
  const [timer, setTimer] = useState<Timer>(getCoutdownTimer());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(getCoutdownTimer());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <motion.span
      id="coutdown"
      className={`${className} flex mt-10`}
      {...(!isMobile ? translateLeftAnimation : mobileTranslateAnimation)}
    >
      <div className={`bg-olive-4 rounded-tl-4xl ${countdownBoxesClass}`}>
        {timer.days} <span className={coutdownBoxesTextClass}>Días</span>
      </div>
      <div className={`bg-olive-3 ${countdownBoxesClass}`}>
        {timer.hours} <span className={coutdownBoxesTextClass}>Horas</span>
      </div>
      <div className={`bg-olive-2 ${countdownBoxesClass}`}>
        {timer.minutes} <span className={coutdownBoxesTextClass}>Minutos</span>
      </div>
      <div className={`bg-olive-1 rounded-br-4xl ${countdownBoxesClass}`}>
        {timer.seconds} <span className={coutdownBoxesTextClass}>Segundos</span>
      </div>
    </motion.span>
  );
};
