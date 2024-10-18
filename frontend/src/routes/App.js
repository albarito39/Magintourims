import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Perfil from '../pages/Perfil';
import Registro from '../pages/Registro';
import Hogar from "../pages/Hogar";
import Reserva from "../pages/solicitud_de_reserva"




function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/perfil' element={<Perfil/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/Hogar' element={<Hogar/>}/>
          <Route exact path='/Reserva' element={<Reserva/>}/>
        </Routes>
    </Router>
  );
}

export default App;
