import { Link } from "react-router-dom";

export const HomeBanner = () => {
  return (
    <div className="h-screen overflow-hidden fade-in relative bg-nyanza-1 bg-[url('/sachet_sm.avif')] xl:bg-[url('/sachet_xl.avif')] bg-no-repeat bg-cover xl:bg-contain bg-center">
      <Link
        to="/main"
        className="absolute top-[45%] xl:top-[75%] right-1/2 translate-x-[55%] z-30 bg-[url('/stamp.avif')] bg-cover bg-center h-32 w-32 md:h-44 md:w-44 animate-palpite"
      ></Link>
    </div>
  );
};
