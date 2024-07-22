import React from "react";
import { IAddressProps } from "./AddressInfo.structure";
import { createPortal } from "react-dom";
import EditAddressModal from "../EditAddressModal";
import { useAddress } from "../../hooks/useAddress";

function AddressInfo({
  props,
  setAddress,
}: {
  props: IAddressProps[];
  setAddress: React.Dispatch<React.SetStateAction<IAddressProps[]>>;
}) {
  const { setCurrentAddress } = useAddress();

  const deleteAddress = (id: number) => {
    const removeAddress = props.filter((data: IAddressProps) => data.id !== id);
    setAddress(removeAddress);
  };

  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <div className="flex flex-col h-full overflow-auto max-h-full gap-2">
      {props.map((data) => {
        if (!data.id) return null;
        return (
          <div
            key={data.id}
            className="flex flex-col w-full mb-5 hover:border-violet-900 py-2 px-3 border border-gray-400 rounded-xl"
          >
            <p>Nome: {data.name}</p>
            {data.lot ? (
              <p>Lote: {data.lot}</p>
            ) : (
              <p>
                {`Endereço: ${data.address},
                    ${data.city},
                    ${data.state},
                    ${data.country},
                    ${data.zipcode}`}
              </p>
            )}
            <p>{data.planet}</p>
            <div className="flex flex-row mt-5 justify-evenly">
              <button
                onClick={() => {
                  setCurrentAddress(data);
                  setShowModal(true);
                }}
                type="button"
                className="w-2/6 bg-violet-900 py-3 text-center text-sm text-white rounded-xl"
              >
                Editar endereço
              </button>
              <button
                onClick={() => deleteAddress(data.id)}
                type="button"
                className="w-2/6 bg-violet-900 py-3 text-center text-sm text-white rounded-xl"
              >
                Deletar endereço
              </button>
            </div>
          </div>
        );
      })}
      {showModal &&
        createPortal(
          <EditAddressModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}

export default AddressInfo;
