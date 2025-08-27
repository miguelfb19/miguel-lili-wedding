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
        <div className="flex flex-col text-center text-lg font-montserrat mt-12 mb-6 font-bold text-olive-4">
          <p>Cuenta de ahorros Bancolombia</p>
          <p>datos fake 31987432782</p>
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
