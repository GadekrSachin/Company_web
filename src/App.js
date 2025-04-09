import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
