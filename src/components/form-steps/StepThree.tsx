import { FormState } from "../../interfaces/attend-form";
import { capitalizeEveryWords } from "../../utils/capitalize";

interface Props{
    stepsClass: string
    step:boolean
    formState: FormState
    setFormState: (state: FormState) => void
}

export const StepThree = ({step, stepsClass, formState, setFormState}:Props) => {
  return (
    <>
      <div
        id="step-3"
        className={`${stepsClass} ${step ? "" : "opacity-0 scale-0"} `}
      >
        <h3 className="text-center text-xl font-bold">
          {formState.nonAttendance
            ? "Que lastima 😔, nos gustaría saber porque no asistirás a nuestra boda"
            : "Confirmaremos la asistencia para:"}
        </h3>
        {formState.nonAttendance ? (
          <div className="flex flex-col gap-4 mt-5">
            <textarea
              placeholder="Escribe aquí"
              className="custom-input !h-52 !rounded-tl-4xl !rounded-br-4xl !rounded-tr-none !rounded-bl-none"
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
          </div>
        ) : (
          <div>
            <div className="text-center flex flex-col mt-5 gap-4">
              <div>
                <h4 className="font-bold font-great-vibes text-4xl">
                  Adultos:
                </h4>
                <div className="flex flex-col">
                  {formState.adults.map((name) => (
                    <span key={name}>{capitalizeEveryWords(name)}</span>
                  ))}
                </div>
              </div>
              <div>
                {formState.kids.length > 0 && (
                  <>
                    <h4 className="font-bold font-great-vibes text-4xl">
                      Niños:
                    </h4>
                    {formState.kids.map((name) => (
                      <span key={name}>{capitalizeEveryWords(name)}</span>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
