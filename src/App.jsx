import HojaDeVida from "./pages/HojaDeVida";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "styles/styles.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HojaDeVida/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
