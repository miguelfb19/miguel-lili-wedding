import { Modal } from "antd";
import { Dispatch, useState } from "react";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSachetRain = ({ isModalOpen, setIsModalOpen }: Props) => {
  const [showAccountData, setShowAccountData] = useState(false);

  const closeModal = () => {
    setShowAccountData(false);
    setIsModalOpen(false);
  };
  return (
    <Modal
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onCancel={closeModal}
      onOk={closeModal}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{
        style: {
          backgroundColor: "#405EA1",
          borderRadius: "9999px",
          boxShadow: "0 4px 6px -1px black",
          fontWeight: "bold",
        },
      }}
    >
      <h3 className="text-olive-4 font-montserrat text-lg text-center mx-10">
        Si prefieres puedes hacer tranferencia con los siguientes datos:
      </h3>

      {showAccountData ? (
        <div className="flex flex-col text-center font-montserrat mt-3 font-bold text-olive-4">
          <span>Cuenta de ahorros Bancolombia</span>
          <div className="font-medium flex flex-col">
            <span>No. 91283406127</span>
            <span>Lili Karina López Mejía</span>
            <span>C.C 1088032938</span>
          </div>
          <br />
          <span>
            Llaves: <span className="font-medium">@LLM032 o 1088032938</span>
          </span>
        </div>
      ) : (
        <button
          onClick={() => setShowAccountData(true)}
          className="custom-btn m-auto"
        >
          Ver datos
        </button>
      )}
    </Modal>
  );
};
