import React from "react";
import EarthAddressForm from "../EarthAddressForm";
import MarsAddressForm from "../MarsAddressForm";
import { useAddress } from "../../hooks/useAddress";

export default function EditAddressModal({ onClose }: { onClose: () => void }) {
  const { currentAddress, setAddresses } = useAddress();
  return (
    <div className="fixed bg-opacity-modal top-0 w-full h-full flex justify-center items-center">
      <div className="p-1 bg-white border max-h-[700px] w-10/12 lg:w-6/12">
        <div className="w-full lg:w-full py-16 px-12">
          <h2 className="text-3xl mb-10">Editar endereço</h2>
          {currentAddress.planet === "Terra" ? (
            <EarthAddressForm
              onClose={onClose}
              isEditing
              isOpen
              setAddress={setAddresses}
            />
          ) : (
            <MarsAddressForm
              onClose={onClose}
              isEditing
              isOpen
              setAddress={setAddresses}
            />
          )}
          <button
            onClick={onClose}
            className="w-full bg-violet-900 py-3 text-center mt-5 text-white rounded-xl animate-fade transition-all duration-1000"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
