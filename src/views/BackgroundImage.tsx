export const BackgroundImage = () => {
  return (
    <div 
      className="fixed w-screen h-screen md:max-h-screen -z-50 bg-[url('/pictures/portada.avif')] bg-cover bg-center bg-no-repeat"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
