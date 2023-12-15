import { useState } from "react";
import "./App.css";
import ScenarioTracker from "./routes/ScenarioTracker";
import Login from "./routes/Login";
import { User } from "./data/types";
import NavbarWrapper from "./components/NavbarWrapper";

function App() {
  const [user, setUser] = useState<User>();

  return (
    <div className="wrapper">
      <NavbarWrapper user={user} setUser={setUser} />
      {user ? (
        <ScenarioTracker user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
