import Swal from "sweetalert2";

type Icon = "success" | "error" | "warning" | "info" | "question";

export const submitAlert = (
  title: string,
  text = "",
  icon: Icon,
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
    color: "#7b9a5e",
    background: "#f7f6e8",
    iconColor: "#7b9a5e",
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
