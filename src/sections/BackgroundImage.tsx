export const BackgroundImage = () => {
  return (
    <div className="fixed w-screen max-h-screen -z-50">
      <img
        src="/pictures/horizontal1.jpeg"
        alt="principal-image"
        className="w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};
