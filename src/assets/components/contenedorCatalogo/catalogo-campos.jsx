import { useState } from "react";
import { Link } from "react-router-dom";

function Catalogo() {
    const [temas, setTemas] = useState(null)
    return(
        <article className="">
            <div className=" w-max m-auto items-center justify-center">
            <div className="">
                <Link to="/agregar-campo"><img className=" w-16" src="../../../public/imagenes/mas.png" alt="mas" /></Link>
            </div>
            {temas && temas.map((tema, index) => (
                <div key={index}>
                    <h3>{tema.nombre}</h3>
                    <p>{tema.descripcion}</p>
                </div>
            ))}
            </div>
        </article>
    )
}
export default Catalogo;