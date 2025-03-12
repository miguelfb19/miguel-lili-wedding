import { FormState } from "../interfaces/attend-form";
import emailjs from "@emailjs/browser";
import { capitalizeEveryWords } from "../utils/capitalize";

const serviceIdEmailjs = import.meta.env.VITE_REACT_APP_SERVICE_ID_EMAILJS;
const templateIdEmailjs = import.meta.env.VITE_REACT_APP_TEMPLATE_ID_EMAILJS;
const publicKeyEmailjs = import.meta.env.VITE_REACT_APP_PUBLIC_KEY_EMAILJS;

export const sendConfirmationMail = async (formData: FormState) => {
  const { adults, kids, message, id, nonAttendance } = formData;

  const successConfirmData = nonAttendance
    ? { message, id: capitalizeEveryWords(id), nonAttendance }
    : {
        adults: adults.map(capitalizeEveryWords).join("\n"),
        kids: kids.map(capitalizeEveryWords).join("\n"),
        id: capitalizeEveryWords(id),
        nonAttendance,
      };
  try {
    const sended = await emailjs.send(
      serviceIdEmailjs,
      templateIdEmailjs,
      successConfirmData,
      {
        publicKey: publicKeyEmailjs,
      }
    );
    if (sended.status !== 200) {
      console.log(sended);
      return {
        ok: false,
        message:
          "Error al enviar la confirmación 😰 por favor comunicate con nosotros lo más pronto posible para corregir el error.",
      };
    }

    if (nonAttendance) {
      return {
        ok: true,
        message:
          "Lamentamos que no puedas acompañarnos 🙁 pero entendemos la situación. Dios te bendiga 🙏",
      };
    }

    return {
      ok: true,
      message:
        "Gracias por confirmar tu asistencia, nos veremos allá 🥳 Dios te bendiga 🙏",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message:
        "Error al enviar la confirmación 😰 por favor comunicate con nosotros lo más pronto posible para corregir el error.",
    };
  }
};
