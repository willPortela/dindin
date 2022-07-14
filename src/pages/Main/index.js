
import './style.css';
import Login from '../../components/Login';
import logo from '../../assets/logo.svg';
import slogan from '../../assets/slogan.svg';

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
            <button>cadastre-se</button>
          </div>
      </div>
      <div className="container-login">
          <Login/>
      </div>
    </div>
  )
}

export default Main;
