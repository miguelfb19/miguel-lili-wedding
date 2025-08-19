import { Radio, RadioChangeEvent } from "antd";
import { Guest } from "../../interfaces/guests";
import { capitalizeEveryWords } from "../../utils/capitalize";
import { FormState } from "../../interfaces/attend-form";

interface Props {
  stepsClass: string;
  step: boolean;
  guests: Guest | undefined;
  formState: FormState;
}

export const StepTwo = ({ stepsClass, step, guests, formState }: Props) => {
  const handleAdultsAttend = (e: RadioChangeEvent, guest: string) => {
    e.preventDefault();
    const { value } = e.target;

    if (value === "no") {
      formState.adults = formState.adults.filter((adult) => adult !== guest);
      return;
    }
    if (formState.adults.includes(guest)) return;

    formState.adults.push(guest);
  };

  const handleKidsAttend = (e: RadioChangeEvent, guest: string) => {
    e.preventDefault();
    const { value } = e.target;

    if (value === "no") {
      formState.kids = formState.kids.filter((kid) => kid !== guest);
      return;
    }
    if (formState.kids.includes(guest)) return;

    formState.kids.push(guest);
  };
  return (
    <>
      <div
        id="step-2"
        className={`${stepsClass} ${step ? "" : "opacity-0 scale-0"} `}
      >
        <h3 className="text-center text-xl font-bold my-7">
          {guests?.adults && guests.adults.length > 1
            ? "¿Asistirán a la boda?"
            : "¿Asistirás a la boda?"}
        </h3>
        {guests?.id.includes(" ") ? (
          <h4 className="font-great-vibes text-4xl w-full text-center mb-7">
            Familia {capitalizeEveryWords(formState.id)}
          </h4>
        ) : null}
        {guests?.adults.map((guest) => (
          <span className="flex p-2 justify-between" key={guest}>
            <p>{capitalizeEveryWords(guest)}</p>
            {step ? (
              <Radio.Group
                block
                options={[
                  { label: "Si", value: "yes" },
                  { label: "No", value: "no" },
                ]}
                optionType="button"
                buttonStyle="solid"
                onChange={(e) => handleAdultsAttend(e, guest)}
              />
            ) : null}
          </span>
        ))}
        {guests?.kids &&
          guests?.kids.map((kid) => (
            <span className="flex p-2 justify-between" key={kid}>
              <p>{capitalizeEveryWords(kid)}</p>
              {step ? (
                <Radio.Group
                  block
                  options={[
                    { label: "Si", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                  optionType="button"
                  buttonStyle="solid"
                  onChange={(e) => handleKidsAttend(e, kid)}
                />
              ) : null}
            </span>
          ))}
      </div>
    </>
  );
};
