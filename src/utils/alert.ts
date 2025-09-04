import Swal from "sweetalert2";

type Icon = "success" | "error" | "warning" | "info" | "question";

export const submitAlert = (
  title: string,
  icon: Icon,
  text: string = "",
  timer = 5,
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
    color: "#172A50",
    background: "#C4DAFA",
    iconColor: "#172A50",
    customClass: {
      title: "custom-font",
      closeButton: ".custom-alert-close-btn",
      popup: 'custom-font',
    },
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};
