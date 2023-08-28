import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
const Equipo = (props) => {
    //Destructuracion "Evitar reescribir codigo"
    const { titulo, colorPrimario, colorSecundario, equipo } = props.datos
    const { colaboradores, eliminarColaborador } = props

    return <>
        {
         colaboradores.length > 0 &&
          <section className="equipo" style={{ backgroundColor: colorSecundario }}>
            <input type="color">

            </input>
            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
              <div className="colaboradores">
                {
                 colaboradores.map((colaborador, index) => <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo