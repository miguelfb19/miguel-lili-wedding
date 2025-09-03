export const BackgroundImage = () => {
  return (
    <div className="fixed w-screen h-screen md:max-h-screen -z-50">
      <img
        src="/pictures/portada.avif"
        alt="principal-image"
        className="w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        width="1920"
        height="1080"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
