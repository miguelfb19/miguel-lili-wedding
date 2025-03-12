import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { allGuests } from "../constants/guests";
import { useFormSteps } from "../store/form-steps";
import { Guest } from "../interfaces/guests";
import { FormState } from "../interfaces/attend-form";
import { StepOne } from "./form-steps/StepOne";
import { StepTwo } from "./form-steps/StepTwo";
import { StepThree } from "./form-steps/StepThree";
import { LoaderCircle } from "lucide-react";
import { sendConfirmationMail } from "../services/send-mail";
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
  const [loading, setLoading] = useState(false);

  const onPressNext = async (e: FormEvent) => {
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
        (guest) => guest.code === formState.code?.toLocaleLowerCase().trim()
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
      // Check adults attendance
      if (formState.adults.length === 0) {
        // If there aren't adults, can't bring kids
        if (formState.kids.length !== 0) {
          setFormState({
            ...formState,
            error:
              "Creo que te equivocaste, no creo que quieras mandar niños solos a la boda jeje 😅",
          });
          return;
        }
        // If there aren't adults, active the message to send
        setFormState({
          ...formState,
          nonAttendance: true,
          error: null,
        });
      } else {
        // if there are adults, remove message and error
        setFormState({
          ...formState,
          nonAttendance: false,
          message: null,
          error: null,
        });
      }
      //   change to next step
      setThird();
    }
    // STEP 3 and last
    if (steps.third) {
      setLoading(true);

      const { ok, message } = await sendConfirmationMail(formState);

      setLoading(false);
      if (!ok) {
        submitAlert("Error", message, "error");
        return;
      }
      submitAlert("Confirmado", message, "success");

      //   When form is submitted, go to first step and reset form
      setFirst();
      setFormState({ ...formState, code: null, adults: [], kids: [] });
    }
  };

  const onPressPrev = (e: FormEvent) => {
    e.preventDefault();
    // When go back to previous step, we reset the form to avoid errors o mix the information

    if (steps.second) {
      setFormState((prev) => ({
        ...prev,
        code: null,
        adults: [], // Reset adults correctly
        kids: [], // Reset kids array
        message: "", // Reset message
        nonAttendance: false,
        error: null, // Clear any errors
      }));
      setFirst();
    }
    if (steps.third) {
      setSecond();
    }
  };

  return (
    <>
      <form className="w-full h-full">
        {/* Error message */}
        {formState.error && (
          <p className="absolute top-5 right-[50%] translate-x-[50%] text-red-600 text-center text-xs w-[70%]">
            {formState.error}
          </p>
        )}

        {/* Loadings Spinner */}
        {loading && (
          <div className="absolute top-0 left-0 z-20 bg-nyanza-1/50 w-full h-full custom-rounded flex justify-center items-center">
            <LoaderCircle className="z-30 animate-spin" size={70} />
          </div>
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
          className="absolute bottom-10 right-[50%] translate-x-1/2 md:w-[80%] flex md:justify-between justify-around"
        >
          <Button
            id="prev"
            as="button"
            text="Anterior"
            className={`!my-0  max-md:w-[40%] ${
              steps.first ? "opacity-0 pointer-events-none" : ""
            }`}
            action={onPressPrev}
          />
          <Button
            id="next"
            as="button"
            text={steps.third ? "Confirmar" : "Siguiente"}
            className="!my-0 max-md:w-[40%]"
            action={onPressNext}
          />
        </span>
      </form>
    </>
  );
};
