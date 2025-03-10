import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { allGuests } from "../constants/guests";
import { useFormSteps } from "../store/form-steps";
import { Guest } from "../interfaces/guests";
import { capitalizeEveryWords } from "../utils/capitalize";
import { Radio, RadioChangeEvent } from "antd";

type Attend = {
  id: string;
  adults: string[];
  kids: string[];
};

const data = {
  code: "",
  id: "",
  adults: [],
  kids: [],
};

const stepsClass =
  "absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full px-10 transition-all duration-900";

const attend = {
  id: "",
  adults: [],
  kids: [],
};

export const AttendForm = () => {
  const { steps, setFirst, setSecond, setThird } = useFormSteps();
  const [guests, setGuests] = useState<Guest>();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(data);
  const [finalAttend, setFinalAttend] = useState<Attend>(attend);

  const onPressNext = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    // STEP 1
    if (steps.first) {
      if (formData.code === "") {
        setError("Por favor ingrese un código");
        return;
      }
      const thisGuest = allGuests.filter(
        (guest) => guest.code === formData.code
      )[0];
      if (!thisGuest) {
        setError("Código no válido");
        return;
      }
      // reset code input
      setGuests(thisGuest);
      setFinalAttend({ ...finalAttend, id: thisGuest.id });
      setSecond();
    }
    if (steps.second) {
      // console.log(finalAttend);
      setThird()
    }
    if(steps.third){
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
    setError(null);
    return;
  };

  const handleFinalAttend = (e: RadioChangeEvent) => {
    e.preventDefault();
    const { value } = e.target;
  };
  return (
    <>
      <form className="relative w-1/2 flex flex-col justify-between p-7 md:p-10 bg-nyanza-3 text-olive-3 rounded-tl-4xl rounded-br-4xl h-96 font-montserrat">
        {error && (
          <p className="absolute top-5 right-0 text-red-600 w-full text-center text-sm">
            {error}
          </p>
        )}

        <div
          id="step-1"
          className={`${stepsClass} ${steps.first ? "" : "opacity-0 scale-0"} `}
        >
          <p className={`w-full text-center my-10`}>
            Ingresa tu <strong>código</strong> de invitado para continuar
          </p>
          <input
            type="text"
            placeholder="Ingrese código aquí"
            className="custom-input"
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          />
        </div>
        <div
          id="step-2"
          className={`${stepsClass} ${
            steps.second ? "" : "opacity-0 scale-0"
          } `}
        >
          {guests?.adults.map((guest) => (
            <span className="flex p-2 justify-between" key={guest}>
              <p>{capitalizeEveryWords(guest)}</p>
              <Radio.Group
                block
                options={[
                  { label: "Si", value: guest },
                  { label: "No", value: undefined },
                ]}
                optionType="button"
                buttonStyle="solid"
                onChange={handleFinalAttend}
              />
            </span>
          ))}
          {guests?.kids &&
            guests?.kids.map((guest) => (
              <span className="flex p-2 justify-between" key={guest}>
                <p>{capitalizeEveryWords(guest)}</p>
                <Radio.Group
                  block
                  options={[
                    { label: "Si", value: guest },
                    { label: "No", value: undefined },
                  ]}
                  optionType="button"
                  buttonStyle="solid"
                  onChange={handleFinalAttend}
                />
              </span>
            ))}
        </div>
        <div
          id="step-3"
          className={`${stepsClass} ${
            steps.third ? "" : "opacity-0 scale-0"
          } `}
        >
            <p className="text-center text-xl font-bold">Confirmaremos la asistencia para:</p>
        </div>
        <span id="buttons-form" className="absolute bottom-10 right-[50%] translate-x-1/2 w-[80%] flex justify-between">
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
