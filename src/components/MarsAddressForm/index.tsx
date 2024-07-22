import React from "react";
import TextInput from "../TextInput";
import { MarsAddress } from "./MarsAddressForm.structure";
import { IAddressProps } from "../AddressInfo/AddressInfo.structure";
import { useAddress } from "../../hooks/useAddress";

function MarsAddressForm({
  setAddress,
  isOpen,
  isEditing,
  onClose,
}: {
  isActive?: boolean;
  setAddress: React.Dispatch<React.SetStateAction<IAddressProps[]>>;
  isOpen?: boolean;
  isEditing?: boolean;
  onClose?: () => void;
}) {
  const { currentAddress, addresses, setAddresses } = useAddress();
  const [marsAddress, setMarsAddress] = React.useState({
    planet: "Marte",
  } as MarsAddress);
  const randomId = Math.floor(Math.random() * 1000);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setMarsAddress((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const marsAddressCopy = { ...marsAddress };
    marsAddressCopy.id = randomId;
    setAddress((prev) => [...prev, marsAddressCopy]);
  }

  function handleEditAddress(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const addressesCopy = [...addresses];
    const indexOfEditedAddress = addressesCopy.findIndex(
      (address) => address.id === currentAddress.id
    );
    addressesCopy[indexOfEditedAddress] = marsAddress;
    setAddresses(addressesCopy);
    onClose!();
  }

  React.useEffect(() => {
    if (isEditing) {
      const { id, name, planet } = currentAddress;
      setMarsAddress({ id, name, lot: currentAddress.lot!, planet });
    }
  }, [currentAddress, isEditing]);

  return (
    <form
      onSubmit={isEditing ? handleEditAddress : handleSubmit}
      className={` ${
        isOpen ? "max-h-[500px]" : "max-h-0"
      } overflow-hidden animate-fade transition-all duration-1000`}
    >
      <label>Nome</label>
      <div className="flex flex-col gap-5 mb-5">
        <TextInput
          name="name"
          value={marsAddress.name}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Ex: Fábrica 1"
        />
      </div>
      <label>Lote</label>
      <div className="mb-5">
        <TextInput
          maxLength={4}
          name="lot"
          value={marsAddress.lot}
          onChange={(e) => handleChange(e)}
          placeholder="Ex: 1234"
        />
      </div>
      <div>
        <button className="w-full bg-violet-900 py-3 text-center text-white rounded-xl">
          {isEditing ? "Editar" : "Adicionar"}
        </button>
      </div>
    </form>
  );
}

export default MarsAddressForm;
