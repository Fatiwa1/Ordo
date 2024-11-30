import { useState } from "react";
import { Link } from "react-router-dom";

function Catalogo() {
    const [temas, setTemas] = useState(null)
    return(
        <article className=" flex flex-col items-center justify-center p-10 gap-5">
            <div className="">
                <Link to="/agregar-campo"><img className=" w-16" src="../../../public/imagenes/mas.png" alt="mas" /></Link>
            </div>
            <div className=" flex flex-wrap gap-8 justify-start">
            
            <div className=" style-cardsCampos">
                <h3 className="text-2xl">Fisica</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam modi ab sapiente unde numquam nesciunt id, iure blanditiis illo consequuntur exercitationem laboriosam maiores velit nobis, doloribus accusamus optio non?</p>
                <Link to="/informacion-campo" className=" border border-white rounded-lg p-1">Ver mas</Link>
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