import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import EventCreation from "./pages/EventCreation.js";
import { Routes, Route, Link } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import TripCreation from "./pages/TripCreation";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/add" element={<EventCreation />} />
        <Route path="/TripCreation" element={<TripCreation />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
