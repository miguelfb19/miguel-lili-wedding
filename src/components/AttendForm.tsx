import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { allGuests } from "../constants/guests";
import { useFormSteps } from "../store/form-steps";
import { Guest } from "../interfaces/guests";
import { FormState } from "../interfaces/attend-form";
import { StepOne } from "./form-steps/StepOne";
import { StepTwo } from "./form-steps/StepTwo";
import { StepThree } from "./form-steps/StepThree";
import { submitAlert } from "../utils/alert";

const initialData = {
  code: null,
  error: null,
  nonAttendance: false,
  id: "",
  adults: [],
  kids: [],
  message: "",
};

const stepsClass =
  "absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full px-10 transition-all duration-900";

export const AttendForm = () => {
  const { steps, setFirst, setSecond, setThird } = useFormSteps();
  const [formState, setFormState] = useState<FormState>(initialData);
  const [guests, setGuests] = useState<Guest>();

  const onPressNext = (e: FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, error: null });
    // STEP 1
    if (steps.first) {
      if (!formState.code) {
        setFormState({ ...formState, error: "Por favor ingrese un código" });
        return;
      }
      //   Search code in guests list
      const thisGuest = allGuests.filter(
        (guest) => guest.code === formState.code
      )[0];
      if (!thisGuest) {
        setFormState({ ...formState, error: "Código no válido" });
        return;
      }
      setFormState({ ...formState, error: null, id: thisGuest.id });
      // get guest info
      setGuests(thisGuest);
      //   Change to second step
      setSecond();
    }
    // STEP 2
    if (steps.second) {
      if (formState.adults.length === 0) {
        if (formState.kids.length !== 0) {
          setFormState({
            ...formState,
            error:
              "Creo que te equivocaste, no creo que quieras mandar niños solos a la boda jeje 😅",
          });
          return;
        }
        setFormState({
          ...formState,
          nonAttendance: true,
          error: null,
        });
      } else {
        setFormState({
          ...formState,
          nonAttendance: false,
          message: null,
          error: null,
        });
      }
      setThird();
    }
    // STEP 3 and last
    if (steps.third) {
      alert(JSON.stringify(formState, null, 2));
      submitAlert(
        "Gracias por confirmar tu asistencia, nos veremos allá, Dios te bendiga 🙏",
        "success"
      );
    }
  };

  const onPressPrev = (e: FormEvent) => {
    e.preventDefault();
    if (steps.second) {
      setFirst();
    }
    if (steps.third) {
      setSecond();
    }
    setFormState({ ...formState, error: null });
    return;
  };

  return (
    <>
      <form className="relative w-1/2 flex flex-col justify-between p-7 md:p-10 bg-nyanza-3 text-olive-3 rounded-tl-4xl rounded-br-4xl h-[70%] font-montserrat">
        {formState.error && (
          <p className="absolute top-5 right-[50%] translate-x-[50%] text-red-600 text-center text-sm w-[70%]">
            {formState.error}
          </p>
        )}

        {/* STEP 1 */}
        <StepOne
          step={steps.first}
          formState={formState}
          setFormState={setFormState}
          stepsClass={stepsClass}
        />

        {/* STEP 2 */}
        <StepTwo
          stepsClass={stepsClass}
          guests={guests}
          step={steps.second}
          formState={formState}
        />

        {/* STEP 3 */}
        <StepThree
          step={steps.third}
          stepsClass={stepsClass}
          formState={formState}
          setFormState={setFormState}
        />
        <span
          id="buttons-form"
          className="absolute bottom-10 right-[50%] translate-x-1/2 w-[80%] flex justify-between"
        >
          <Button
            id="prev"
            as="button"
            text="Anterior"
            className={`!my-0 ${
              steps.first ? "opacity-0 pointer-events-none" : ""
            }`}
            action={onPressPrev}
          />
          <Button
            id="next"
            as="button"
            text={steps.third ? "Confirmar" : "Siguiente"}
            className="!my-0"
            action={onPressNext}
          />
        </span>
      </form>
    </>
  );
};
