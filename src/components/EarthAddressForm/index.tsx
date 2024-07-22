import React from "react";
import TextInput from "../TextInput";
import { IAddressProps } from "../AddressInfo/AddressInfo.structure";
import { useAddress } from "../../hooks/useAddress";

function EarthAddressForm({
  setAddress,
  isOpen,
  isEditing,
  onClose,
}: {
  setAddress: React.Dispatch<React.SetStateAction<IAddressProps[]>>;
  isOpen: boolean;
  isEditing?: boolean;
  onClose?: () => void;
}) {
  const { addresses, currentAddress, setAddresses } = useAddress();
  const [earthAddress, setEarthAddress] = React.useState({
    planet: "Terra",
  } as IAddressProps);
  const randomId = Math.floor(Math.random() * 1000);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setEarthAddress((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const earthAddressCopy = { ...earthAddress };
    earthAddressCopy.id = randomId;
    setAddress((prev) => [...prev, earthAddressCopy]);
  }

  function handleEditAddress(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const addressesCopy = [...addresses];
    const indexOfEditedAddress = addressesCopy.findIndex(
      (address) => address.id === currentAddress.id
    );
    addressesCopy[indexOfEditedAddress] = earthAddress;
    setAddresses(addressesCopy);
    onClose!();
  }

  React.useEffect(() => {
    if (isEditing) {
      const { id, name, planet, address, city, country, state, zipcode } =
        currentAddress;
      setEarthAddress({
        id,
        name,
        address,
        planet,
        city,
        country,
        state,
        zipcode,
      });
    }
  }, [currentAddress, isEditing]);

  return (
    <form
      onSubmit={isEditing ? handleEditAddress : handleSubmit}
      name="earthAddressForm"
      className={` ${
        isOpen ? "max-h-[500px]" : "max-h-0"
      } overflow-hidden animate-fade transition-all duration-1000`}
    >
      <label>Nome</label>
      <div className="flex flex-col gap-5 mb-5">
        <TextInput
          name="name"
          value={earthAddress.name}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Ex: Casa"
        />
      </div>
      <label>Endereço</label>
      <div className="mb-5">
        <TextInput
          name="address"
          value={earthAddress.address}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Ex: Rua Jericó, 35"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div>
          <label>Cidade</label>
          <TextInput
            name="city"
            value={earthAddress.city}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Ex: São Paulo"
          />
        </div>
        <div>
          <label>Estado</label>
          <TextInput
            name="state"
            value={earthAddress.state}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Ex: Minas Gerais"
          />
        </div>
        <div>
          <label>País</label>
          <TextInput
            name="country"
            value={earthAddress.country}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Ex: Brasil"
          />
        </div>
        <div>
          <label>CEP</label>
          <TextInput
            name="zipcode"
            value={earthAddress.zipcode}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Ex: 30481-234"
          />
        </div>
      </div>
      <div>
        <button className="w-full bg-violet-900 py-3 text-center text-white rounded-xl">
          {isEditing ? "Editar" : "Adicionar"}
        </button>
      </div>
    </form>
  );
}

export default EarthAddressForm;
