
import './style.css';
import Login from '../../components/Login';
import logo from '../../assets/logo.svg';
import slogan from '../../assets/slogan.svg';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div className="container-main">
      <div className="main">
          <div className="logo">
             <img src={logo} alt="logo-dindin"/>
          </div>
          <img className="slogan" src={slogan} alt="slogan"/>
          <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo em um único lugar e em um clique de distância.</p>
          <div className="btn-register">
            <Link to="registrar"><button>cadastre-se</button></Link>   
          </div>
      </div>
      <div className="container-login">
          <Login/>
      </div>
    </div>
  )
}

export default Main;
