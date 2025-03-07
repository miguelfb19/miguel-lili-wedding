import { motion } from "motion/react";
import { LocationCard } from "../components/LocationCard";
import { useIsMobileStore } from "../store/is-mobile-store";
import {
  mobileTranslateAnimation,
  translateUpAnimation,
} from "../constants/animations";

const cardsInfo = [
  {
    title: "Eucarístia",
    location: "Parroquía Los XII Apóstoles",
    time: "2:00PM",
    description: "Cra 26 No 33b-15, Barrio Poblado II Etapa",
    link: "https://maps.app.goo.gl/VWGV87hHv8ZJgbfAA",
    image: "/pictures/parroquia12apostoles.webp",
  },
  {
    title: "Recepción",
    location: "Parroquía Los XII Apóstoles",
    time: "2:00PM",
    description: "Cra 26 No 33b-15, Barrio Poblado II Etapa",
    link: "#",
    image: "/pictures/parroquia12apostoles.webp",
  },
];

export const Locations = () => {
  const { isMobile } = useIsMobileStore();

  return (
    <section className="flex max-md:flex-col gap-5 justify-around items-center px-10 py-20">
      {cardsInfo.map((card) => (
        <motion.div
          key={card.title}
          {...(isMobile ? mobileTranslateAnimation : translateUpAnimation)}
        >
          <LocationCard
            image={card.image}
            title={card.title}
            location={card.location}
            time={card.time}
            description={card.description}
            link={card.link}
          />
        </motion.div>
      ))}
    </section>
  );
};
