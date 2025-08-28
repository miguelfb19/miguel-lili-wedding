import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

function ButtonToTop() {
  //Hacemos el scrollToTop con una funcion debido a que los parametros como 'duration'
  //no los agarra directamente en el JSX
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };
  const [showBtn, setShowBtn] = useState(true);

  const vh = window.innerHeight;

  //Funcion para mostrar o quitar el boton de Scroll Top
  const handleButton = () => {
    if (window.scrollY > vh) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  //escuchamos el evento scroll de la ventana del navegador
  window.addEventListener("scroll", handleButton);

  //Ejecutamos el handle en cuando se renderiza el componente para que lo quite en la pantalla inicial
  useEffect(() => {
    handleButton();
    // eslint-disable-next-line
  }, []);

  return (
    <button
      className={`${
        showBtn ? "flex" : "hidden"
      } fixed bottom-5 right-5 bg-nyanza-4 opacity-70 p-3 rounded-full cursor-pointer hover:opacity-100 transition-all z-20`}
      onClick={scrollToTop}
    >
      <ChevronUp color="#172A50" size={40} />
    </button>
  );
}

export default ButtonToTop;
