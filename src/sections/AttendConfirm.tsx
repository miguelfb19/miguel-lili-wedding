import { AttendForm } from "../components/AttendForm";

export const AttendConfirm = () => {
  return (
    <div className="h-screen flex flex-col md:gap-10 justify-center items-center">
      <h2 className="font-great-vibes text-center text-6xl md:text-8xl text-nyanza-1">
        Confirma tu asistencia
      </h2>
      <AttendForm />
    </div>
  );
};
