import React, { SetStateAction, createContext } from "react";
import { IAddressProps } from "../../components/AddressInfo/AddressInfo.structure";

interface IAdressContext {
  addresses: IAddressProps[];
  setAddresses: React.Dispatch<SetStateAction<IAddressProps[]>>;
  currentAddress: IAddressProps;
  setCurrentAddress: React.Dispatch<SetStateAction<IAddressProps>>;
}

const AddressContext = createContext({} as IAdressContext);

function AddressProvider({ children }: { children: React.ReactNode }) {
  const [addresses, setAddresses] = React.useState([] as IAddressProps[]);
  const [currentAddress, setCurrentAddress] = React.useState(
    {} as IAddressProps
  );

  return (
    <AddressContext.Provider
      value={{ addresses, setAddresses, currentAddress, setCurrentAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
}

function useAddress() {
  const context = React.useContext(AddressContext);
  if (context === undefined) {
    throw new Error("useAddress must be used within an AddressProvider");
  }
  return context;
}
export { AddressProvider, useAddress, AddressContext };
