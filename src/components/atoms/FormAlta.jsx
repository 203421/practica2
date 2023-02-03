import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FormAlta(){
    const navigate = useNavigate()
    const handlerClick = (e)=>{
        e.preventDefault();
        navigate("/")
    }
    return(
        <form className="Conteiner">
            <label className="caption" htmlFor="name">Nombre</label>
            <input type="text" id="name"/>

            <label className="caption">Usuario
            <input type="text"/>
            </label>

            <labe className="caption">contraseña</labe>
            <input type="password"></input>
           <button className="btn" onClick={handlerClick}>Registro</button>
           <Link className="btn2"  to="/Register">Registrate aqui</Link>
        </form>
    )
}
export default  FormAlta;