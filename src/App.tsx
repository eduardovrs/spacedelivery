import { BrowserRouter as Router } from "react-router-dom";
import { AddressProvider } from "./hooks/useAddress";
import Routes from "./Routes";

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <AddressProvider>
          <Routes />
        </AddressProvider>
      </Router>
    </div>
  );
}

export default App;
