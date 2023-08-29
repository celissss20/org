import { useState } from 'react';
import './App.css';
import Header from './componetes/Header/Header.js';
import Formulario from './componetes/Formulario/Formulario';
import MiOrg from './componetes/MiOrg/MiOrg';
import Equipo from './componetes/Equipo/Equipo';
import Footer from './componetes/Footer/Footer';
import {v4 as  uuid} from "uuid"
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:false
  },
    {
    id:uuid(),
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/82053503?v=4",
    nombre: "Daniel Celis",
    puesto: "Desarrollador",
    fav:false
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])
  const [equipos, actualizarEquipos]= useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#c3edd9"
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#dcf4fe"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#ebfad2"
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //ternario -->  condicion ? seMuestra :   noSeMuestra
  //"Forma reducida" condicion && seMuestra 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registra colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar a colaborador 

  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id ) =>{
    console.log("Cambiar color:",color," - ",id )
    const equiposActualizados = equipos.map((equipo) =>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo 
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  //funcion favoritos 
  const like = (id) => {
    console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {
        //"Manera larga" {mostrarFormulario ? < Formulario/>:<></>}
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
