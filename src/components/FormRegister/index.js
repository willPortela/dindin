import './style.css';

function FormRegister () {
    return (  
        <form className="form-register">
            <h1>Cadastre-se</h1>
            <span>Nome</span>
            <input type="text"/>
            <span>Nome</span>
            <input type="text"/>
            <span>Nome</span>
            <input type="text"/>
            <span>Nome</span>
            <input type="text"/>
            <button>Cadastrar</button> 
            <p>Já tem cadastro? Cloque aqui!</p>
        </form>
    )
}

export default FormRegister;

