import { ArrowBigDown } from "lucide-react";
import { useViewsStore } from "../store/views-store";
import { useEffect } from "react";

export const HomeBanner = () => {
  const { setView } = useViewsStore();

  // Pre-cargar la imagen de fondo (simple y efectivo)
  useEffect(() => {
    const img = new Image();
    img.src = '/pictures/portada.avif';
  }, []);

  return (
    <div className="h-screen overflow-hidden fade-in relative bg-nyanza-1 bg-[url('/pictures/sachet_sm.avif')] xl:bg-[url('/pictures/sachet_xl.avif')] bg-no-repeat bg-cover bg-center">
      
      <div className="text-nyanza-1 text-center m-auto max-md:mx-3 md:w-3/5 pt-12 xl:pt-32 flex flex-col gap-2 xl:gap-8">
        <h1 className="font-great-vibes text-5xl md:text-6xl lg:text-7xl">
          Invitación a nuestra boda
        </h1>
        <p className="font-montserrat max-md:text-[.9rem] md:w-9/12 lg:w-8/12 xl:w-10/12 m-auto 2xl:text-2xl">
          Estamos profundamente agradecidos con Dios por este momento en
          nuestras vidas y queremos que hagas parte de este día tan especial y
          que nos bendigas con tu presencia.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-xs text-white absolute top-[40%] xl:top-[70%] 2xl:top-[70%] z-10 right-1/2 translate-x-[55%] animate-custom-pulse">
        <div>Click para iniciar </div>
        <ArrowBigDown fill="currentColor" />
      </div>
      <button
        className="absolute top-[45%] xl:top-[75%] 2xl:top-[80%] right-1/2 translate-x-[55%] z-30 bg-[url('/pictures/stamp.avif')] bg-cover bg-center h-32 w-32 md:h-44 md:w-44 animate-palpite cursor-pointer"
        onClick={() => setView("main")}
      ></button>
    </div>
  );
};
