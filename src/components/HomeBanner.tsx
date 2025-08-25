import { Link } from "react-router-dom";

export const HomeBanner = () => {
  return (
    <div className="h-screen fade-in relative bg-nyanza-1 ">
      {/* <img src="/lirios.webp" alt="lirios" className="absolute top-0 left-1/2 -translate-x-1/2 z-20 max-md:rotate-90 max-md:w-screen"/> */}
      <div className="bg-nyanza-4 olive triangle-up absolute"></div>
      <span className="absolute top-[55%] md:top-[25%] left-1/2 transform -translate-x-1/2 text-center text-olive-4">
        <h1 className="font-great-vibes text-7xl md:text-8xl w-screen">Invitación a nuestra boda</h1>
        <p className="font-montserrat text-xl md:text-2xl w-[80vw] md:w-[60vw] m-auto">Queremos que celebres con nosotros este momento especial y nos bendigas con tu presencia</p>
      </span>
      <Link to="/main" className="absolute top-[42%] md:top-1/2 right-1/2 translate-x-1/2 z-30 bg-[url('/sello.webp')] bg-cover bg-center h-24 w-24 md:h-32 md:w-32"></Link>
    </div>
  );
};
