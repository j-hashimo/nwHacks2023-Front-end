import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import EventCreation from "./pages/EventCreation.js";
import { Routes, Route, Link } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import TripCreation from "./pages/TripCreation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signupform" element={<SignUpForm />} />{" "}
        {/*path needs to be signupform */}
        <Route path="/add" element={<EventCreation />} />
        <Route path="/TripCreation" element={<TripCreation />} />
      </Routes>
    </div>
  );
}

export default App;
