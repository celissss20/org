import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //Destructuracion "Evitar reescribir codigo"
    const { titulo, colorPrimario, colorSecundario, equipo,id } = props.datos
    const { colaboradores, eliminarColaborador,actualizarColor } = props
    const obj ={
        backgroundColor: hexToRgba(colorPrimario,0.4)
    }

    return <>
        {
         colaboradores.length > 0 &&
          <section className="equipo" style={obj}>
            <input 
            className="input-color" 
            type="color"
            value={colorPrimario}
            onChange={(event) =>{
                actualizarColor(event.target.value,id)
            }}
            />
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