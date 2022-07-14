import './style.css'
import { Link } from 'react-router-dom';

function Login () {
    return (
        <div className="login">
            <h1>Login</h1>
            <div>

                <span>E-mail</span>
                <input type="text" id="email" />
                <span>Password</span>
                <input type="password" id="password" />
                
                <Link to="/home"><button>entrar</button></Link>
                
            </div>
        </div>
       
    )
}

export default Login;