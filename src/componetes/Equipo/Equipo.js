import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
const Equipo = (props) => {
    //Destructuracion "Evitar reescribir codigo"
    const { titulo, colorPrimario, colorSecundario,equipo } = props.datos
    const { colaboradores } = props

    console.log(colaboradores.length > 0)

    return <>
    { 
    colaboradores.length > 0 &&
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
                <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                        />)
                    }
                </div>
            </section>
    }
    </>
}

export default Equipo