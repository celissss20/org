import "./ListaOpsiones.css"

const ListaOpsiones = (props) =>{
    /*Metodo map -> arreglo.map( (equipo,index) =>{
        return <option></option>
    })*/
    

    const manejarCambio= (e)=>{
        console.log("cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opsiones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="">Seleccionar equipo</option>
            {props.equipos.map((equipo,index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
} 

export default ListaOpsiones