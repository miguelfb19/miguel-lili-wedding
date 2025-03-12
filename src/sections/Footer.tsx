export const Footer = () => {
  return (
    <div className="h-24 bg-olive-3 flex items-center text-nyanza-2 text-center text-xs">
      <div className="flex-1/4"></div>
      <div className="flex-2/4 flex flex-col gap-1">
        <span>Desarrollado con ❤️ por Miguel Ángel Fernández</span>
        <a
          href="https://miguelangeldev.vercel.app"
          target="_blank"
          className="underline"
        >
          Mira mi portafolio web aquí
        </a>
      </div>
      <div className="flex-1/4"></div>
    </div>
  );
};
