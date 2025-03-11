import { FormState } from "../../interfaces/attend-form";

interface Props{
    stepsClass: string
    step: boolean
    formState: FormState
    setFormState: (state: FormState) => void
}

export const StepOne = ({stepsClass, step, formState, setFormState}: Props) => {
  return (
    <>
      <div
        id="step-1"
        className={`${stepsClass} ${step ? "" : "opacity-0 scale-0"} `}
      >
        <p className={`w-full text-center my-10`}>
          Ingresa tu <strong>código</strong> de invitado para continuar
        </p>
        <input
          type="text"
          placeholder="Ingrese código aquí"
          className="custom-input"
          value={formState.code ?? ""}
          onChange={(e) => setFormState({ ...formState, code: e.target.value })}
        />
      </div>
    </>
  );
};
