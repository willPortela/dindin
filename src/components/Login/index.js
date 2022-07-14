import './style.css'

function Login () {
    return (
        <div className="login">
            <h1>Login</h1>
            <div>

                <span>E-mail</span>
                <input type="text" id="email" />
                <span>Password</span>
                <input type="password" id="password" />
                
                
                <button>entrar</button>
            </div>
        </div>
       
    )
}

export default Login;