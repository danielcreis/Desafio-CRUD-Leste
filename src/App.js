/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import Home from './components/Home.js';
import Sobre from './components/Sobre.js';
import Client from './components/Client.js';
import {BrowserRouter, Link, Routes, Route, Form} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clientes from './components/Client.js';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/" isExternal color>Página Inicial</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/clientes">Cadastro de Clientes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/sobre"> Sobre</Nav.Link>
      </Nav.Item>
    </Nav>


      <Routes>
        <Route path="/" index element={<Home/>}> </Route>
        <Route path="/clientes"  element={<Clientes/>}> </Route>
        <Route path="/sobre"  element={<Sobre/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
