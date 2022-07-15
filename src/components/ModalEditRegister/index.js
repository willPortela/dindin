import './style.css';
import close from '../../assets/close.svg';

function MoadalEditRegister ({ setEditRegister }) {

    return (
        <div className="container-modal-edit-register">
            <form className="form-edit-register">
                <img onClick={()=>setEditRegister(false)}src={close} alt="btn-close"/>
                <h1>Editar Registro</h1>
                <div className="btns">
                    <button type="button">Entrada</button>
                    <button type="button">Saida</button>
                </div>

                <span>Valor</span>
                <input type="text"/>
                <span>Categoria</span>
                <input type="text"/>
                <span>Data</span>
                <input type="text"/>
                <span>Descrição</span>
                <input type="text"/>

                <button className="btn-confirm">Confirmar</button>
            </form>
        </div>
    )
}

export default MoadalEditRegister;