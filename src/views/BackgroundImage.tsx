import { useState, useEffect } from "react";

export const BackgroundImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Verificar si la imagen ya está en cache
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/pictures/portada.avif";
    
    // Si ya está cargada (from cache), marcarla como loaded
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div className="fixed w-screen h-screen md:max-h-screen -z-50">
      <img
        src="/pictures/portada.avif"
        alt="principal-image"
        className={`w-full h-full object-cover transition-opacity duration-200 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        width="1920"
        height="1080"
        onLoad={() => setImageLoaded(true)}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
