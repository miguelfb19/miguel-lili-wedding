import { useState, useEffect } from "react";
import { Timer } from "../interfaces/timer";
import { getCoutdownTimer } from "../utils/get-coutdown-timer";
import { motion } from "motion/react";
import { translateLeftAnimation } from '../constants/animations';

const countdownBoxesClass =
  "p-5 flex flex-col justify-center items-center text-nyanza-2 font-montserrat text-4xl h-36 aspect-square";

const coutdownBoxesTextClass = "text-sm";

export const CoutdownTimer = () => {
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
    <>
      <motion.span id="coutdown" className="flex mt-10" {...translateLeftAnimation}>
        <div className={`bg-olive-4 ${countdownBoxesClass}`}>
          {timer.days} <span className={coutdownBoxesTextClass}>Días</span>
        </div>
        <div className={`bg-olive-3 ${countdownBoxesClass}`}>
          {timer.hours} <span className={coutdownBoxesTextClass}>Horas</span>
        </div>
        <div className={`bg-olive-2 ${countdownBoxesClass}`}>
          {timer.minutes}{" "}
          <span className={coutdownBoxesTextClass}>Minutos</span>
        </div>
        <div className={`bg-olive-1 ${countdownBoxesClass}`}>
          {timer.seconds}{" "}
          <span className={coutdownBoxesTextClass}>Segundos</span>
        </div>
      </motion.span>
    </>
  );
};
