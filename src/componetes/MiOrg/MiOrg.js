import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

//const [nombreVariable, funcionActualiza]= useState(valor inicial)

    
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="\img\add.png" alt="Add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg