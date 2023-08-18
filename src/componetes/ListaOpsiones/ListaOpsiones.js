import "./ListaOpsiones.css"

const ListaOpsiones = () =>{
    /*Metodo map -> arreglo.map( (equipo,index) =>{
        return <option></option>
    })*/
    const equipos = [
        "Seleccionar equipo",
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opsiones">
        <label>Equipo</label>
        <select>
            {equipos.map((equipo,index) => {
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
} 

export default ListaOpsiones