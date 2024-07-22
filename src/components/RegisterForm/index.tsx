import { useNavigate } from "react-router-dom";
import TextInput from "../TextInput";
import React from "react";

type UserInfo = {
  firstName: string;
  surName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function RegisterForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState({} as UserInfo);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/Profile", { state: userInfo });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <TextInput
          name="firstName"
          value={userInfo.firstName}
          type="text"
          placeholder="Primeiro nome"
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          name="surName"
          value={userInfo.surName}
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <TextInput
        name="email"
        value={userInfo.email}
        type="text"
        placeholder="E-mail"
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        name="password"
        value={userInfo.password}
        type="password"
        placeholder="Senha"
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        name="passwordConfirm"
        value={userInfo.passwordConfirm}
        type="password"
        placeholder="Confirmar senha"
        onChange={(e) => handleChange(e)}
      />
      <button className="w-full bg-violet-900 mt-5 py-3 text-center text-white rounded-xl">
        Cadastrar
      </button>
    </form>
  );
}

export default RegisterForm;
