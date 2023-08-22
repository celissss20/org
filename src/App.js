import { useState } from 'react';
import './App.css';
import Header from './componetes/Header/Header.js';
import Formulario from './componetes/Formulario/Formulario';
import MiOrg from './componetes/MiOrg/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //ternario -->  condicion ? seMuestra :   noSeMuestra
  //"Forma reducida" condicion && seMuestra 

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar} />
    </div>
  );
}

export default App;
