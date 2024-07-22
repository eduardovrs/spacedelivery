import { Routes as Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route index element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
    </Switch>
  );
}
