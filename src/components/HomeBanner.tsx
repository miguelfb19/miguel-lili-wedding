import { useViewsStore } from "../store/views-store";

export const HomeBanner = () => {
  const { setView } = useViewsStore();
  return (
    <div className="h-screen overflow-hidden fade-in relative bg-nyanza-1 bg-[url('/sachet_sm.avif')] xl:bg-[url('/sachet_xl.avif')] bg-no-repeat bg-cover bg-center">
      <div className="text-nyanza-1 text-center m-auto max-md:mx-3 md:w-3/5 pt-12 xl:pt-32 flex flex-col gap-2 xl:gap-8">
        <h1 className="font-great-vibes text-5xl md:text-7xl">
          Invitación a unestra boda
        </h1>
        <p className="font-montserrat max-md:text-[0.75rem] md:w-9/12 xl:w-10/12 m-auto 2xl:text-2xl">
          Estamos profundamente conmovidos y agradecidos con Dios por este
          momento en nuestras vidas y queremos hacerte parte de este momento tan
          especial para nosotros, queremos celebrarlo contigo y que tú nos
          bendigas con tu presencia
        </p>
      </div>
      <button
        className="absolute top-[45%] xl:top-[75%] 2xl:top-[80%] right-1/2 translate-x-[55%] z-30 bg-[url('/stamp.avif')] bg-cover bg-center h-32 w-32 md:h-44 md:w-44 animate-palpite cursor-pointer"
        onClick={() => setView("main")}
      ></button>
    </div>
  );
};
