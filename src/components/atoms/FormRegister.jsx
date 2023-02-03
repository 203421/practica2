import { useRef } from 'react';
import {useNavigate , Link}  from 'react-router-dom';

function FormRegister() {
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'

    const handlerClick = (e)=>{
        navigate("/Login")
        e.preventDefault();

        const newForm = new FormData(form.current)
     

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }

        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data))
        })
    }

    return ( 
        <form className='Conteiner'  ref={form}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="nombre" />
            </div>

            <div>
                <label>Usuario
                    <input type="text" name="usuario"/>
                </label>
            </div>

            <div>
                <label htmlFor="name">Correo electrónico</label>
                <input type="text" id="name" name="correo" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" name='contrasenia' />
            </div>

            <button type="button" onClick={handlerClick}>Registrarse</button>
        </form>
     );
}

export default FormRegister;