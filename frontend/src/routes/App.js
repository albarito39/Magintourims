import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Perfil from '../pages/Perfil';
import Registro from '../pages/Registro';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/perfil' element={<Perfil/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
        </Routes>
    </Router>
  );
}

export default App;
