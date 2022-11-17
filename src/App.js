/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Clientes from "./pages/Client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Stack direction="text" spacing={2}>  
          <Button variant="text" href="/">Página Inicial</Button>
          <Button variant="text" href="/clientes">
            Cadastro de Clientes
          </Button>
          <Button variant="text" href="/sobre">
            Sobre
          </Button>
        </Stack>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
