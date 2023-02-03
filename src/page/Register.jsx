import FormRegister from "../components/atoms/FormRegister";
import "../assets/style/FormLogin.css"
import Title from "../components/atoms/Title"
function Register(){
    return(
       <>
        <Title msn="Bienvenido a Registro De Usuarios"></Title>
        <FormRegister></FormRegister>
       </>
    )

}
export default Register;