import Swal from "sweetalert2";

type Icon = "success" | "error" | "warning" | "info" | "question";

interface AlertOptions {
  title: string;
  icon: Icon;
  text?: string;
  timer?: number;
  width?: string;
}

export const submitAlert = ({
  title,
  icon,
  text = "",
  timer = 5,
  width = "32em"
}: AlertOptions) => {
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
