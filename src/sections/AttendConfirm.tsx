import { motion } from "motion/react";
import { AttendForm } from "../components/AttendForm";
import {
  mobileTranslateAnimation,
  translateLeftAnimation,
  translateRightAnimation,
} from "../constants/animations";
import { useIsMobileStore } from "../store/is-mobile-store";

export const AttendConfirm = () => {
  const { isMobile } = useIsMobileStore();
  return (
    <div className="h-screen flex flex-col md:gap-10 justify-center items-center">
      <motion.h2
        className="font-great-vibes text-center text-6xl max-md:w-3/4 max-md:mb-5 md:text-8xl text-nyanza-1"
        {...(!isMobile ? translateLeftAnimation : mobileTranslateAnimation)}
      >
        Confirma tu asistencia
      </motion.h2>
      <motion.div
        className="relative w-[90%] md:w-1/2 flex flex-col justify-between p-7 md:p-10 bg-nyanza-3 text-olive-3 custom-rounded h-[70%] font-montserrat"
        {...(!isMobile ? translateRightAnimation : mobileTranslateAnimation)}
      >
        <AttendForm />
      </motion.div>
    </div>
  );
};
