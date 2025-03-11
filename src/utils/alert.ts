import Swal from "sweetalert2";

type Icon = "success" | "error" | "warning" | "info" | "question";

export const submitAlert = (
  title: string,
  text = "",
  icon: Icon,
  timer = 3,
  width = "32em"
) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    width: width,
    showConfirmButton: false,
    showCloseButton: true,
    timer: timer * 1000,
    timerProgressBar: true,
    customClass: {
      title: "text-olive-3 text-2xl font-bold font-montserrat",
      closeButton: "text-olive-3 text-2xl font-bold",
    },
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};
