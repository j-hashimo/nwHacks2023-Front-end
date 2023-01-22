import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
