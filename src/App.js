import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MostrarPaquetes from "./components/MostrarPaquetes";
import EnviarPaquete from "./components/EnviarPaquete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MostrarPaquetes />} />
          <Route path="/create" element={<EnviarPaquete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
