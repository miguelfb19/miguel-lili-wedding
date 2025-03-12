import { Link } from "react-router-dom";

export const HomeBanner = () => {
  return (
    <div className="h-screen fade-in relative">
      <div className="bg-nyanza-4 absolute w-[50rem] h-[50rem] rounded rotate-45 -top-1/2 left-1/2">Welcome</div>
      <Link
        to="/invitation"
        className="absolute top-0 right-1/2 flex justify-center py-3 px-10 my-10 font-montserrat font-bold uppercase text-center bg-olive-3 rounded-full text-nyanza-2 cursor-pointer shadow-md shadow-gray-400 active:scale-95 transition-all active:shadow-none"
      >Hola</Link>
    </div>
  );
};
