import RegisterForm from "../../components/RegisterForm";
import stars from "../../assets/stars.png";

function Register() {
  const image = stars;
  return (
    <main
      className="flex min-h-screen flex-col align-center justify-center"
      style={{
        backgroundImage: "linear-gradient(115deg, #020024, #2b0979, #4400ff)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h1 className="text-white font-bold text-4xl self-center">
              Space Delivery
            </h1>
            <p className="text-white font-medium text-center mt-10">
              Conectando Planetas, Entregando o Futuro: Seu Delivery
              Interplanetário Automatizado entre Marte e Terra.
            </p>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-10">Cadastro</h2>
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
