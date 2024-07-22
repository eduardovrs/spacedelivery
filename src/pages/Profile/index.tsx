import React from "react";
import EarthAddressForm from "../../components/EarthAddressForm";
import MarsAddressForm from "../../components/MarsAddressForm";
import AddressInfo from "../../components/AddressInfo";
import { useAddress } from "../../hooks/useAddress";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const { addresses, setAddresses } = useAddress();
  const location = useLocation();
  const userInfo = location.state;
  const [planet, setPlanet] = React.useState<string>("");

  function getUserInitials(firstName: string, surName: string) {
    const fisrtInitial = firstName.slice(0, 1);
    const secondInitial = surName.slice(0, 1);
    const userInitials = fisrtInitial.concat(secondInitial);
    return userInitials;
  }

  return (
    <main
      className="flex min-h-screen flex-col align-center justify-center"
      style={{
        backgroundImage: "linear-gradient(115deg, #020024, #2b0979, #4400ff)",
      }}
    >
      <div className="flex flex-col w-8/12 justify-start items-start container mx-auto">
        <div className="w-fit h-12 bg-white flex justify-center rounded-t-lg items-center gap-3 px-8">
          <div className="flex justify-center items-center w-8 aspect-square rounded-full bg-purple-800 text-md text-white font-medium text-center">
            {getUserInitials(userInfo.firstName, userInfo.surName)}
          </div>
          <span className="text-md font-semibold text-black">
            {userInfo.firstName} {userInfo.surName}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row max-h-[700px] w-full bg-white rounded-r-lg rounded-bl-lg mx-auto shadow-lg overflow-hidden transition-all duration-500">
          <div className="w-full lg:w-1/2 py-16 px-12 overflow-hidden">
            <h2 className="text-3xl mb-10">Adicionar endereço</h2>
            <div className="flex flex-row gap-3 w-full lg:w-2/5 mb-5">
              <input
                type="radio"
                name="planet"
                value={"Earth"}
                onChange={(e) => setPlanet(e.target.value)}
              />
              Terra
              <input
                type="radio"
                name="planet"
                value={"Mars"}
                onChange={(e) => setPlanet(e.target.value)}
              />
              Marte
            </div>
            <EarthAddressForm
              isOpen={planet === "Earth"}
              setAddress={setAddresses}
            />
            <MarsAddressForm
              isOpen={planet === "Mars"}
              setAddress={setAddresses}
            />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-10">Endereços cadastrados</h2>
            <AddressInfo setAddress={setAddresses} props={addresses} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
