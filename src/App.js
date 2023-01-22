import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import { Routes, Route, Link } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signupform" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
