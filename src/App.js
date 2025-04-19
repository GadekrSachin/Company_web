import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/AboutUs/About.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
