import "./Formulario.css"
import CampoTexto from "../CamposTexto/CampoTexto"
import ListaOpsiones from "../ListaOpsiones/ListaOpsiones"
import Boton from "../Boton/Boton"

const Formulario =() =>{
    return <section className="formulario">
        <form>
         <h2>Rellena el formulario para crear el colaborador.</h2>
         <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
         <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
         <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
         <ListaOpsiones/>
         <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario