import './style.css';
import logo from '../../assets/logo.svg';
import FormRegister from '../../components/FormRegister';


function Register() {
    return (
        <div className="container-register">
            <img src={logo} alt="logo-dindin"/>
            <FormRegister/>
        </div>
    )
}

export default Register;