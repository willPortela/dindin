import './style.css';
import Header from '../../components/Header';
import filter from '../../assets/filter.svg';
import edit from '../../assets/edit.svg';
import trash from '../../assets/trash.svg';
import arrowtop from '../../assets/arrowtop.svg';
import { useState } from 'react';
import MoadalEditRegister from '../../components/ModalEditRegister';


function Home () {

    const [editRegister, setEditRegister] = useState(false);


    return (
        <div className="container-home">
            <Header
            />
            <div className="controler-finance">
                <div className="finances">
                    <div className="btn-filter">
                        <img src={filter} alt="img-filter"/>
                    </div>
                    <div className="finance">
                        <div className="titles-finance">
                            <div className="data">
                                <span>Data</span>
                                <img src={arrowtop} alt="img-edit"/>
                            </div>
                            <span>Dia da semana</span>
                            <span>Descrição</span>
                            <span>Categoria</span>
                            <span>Valor</span>
                        </div>
                        <div className="content-finance">
                            <span>01/09/21</span>
                            <span>Quarta</span>
                            <span>Venda dos Brigadeiros</span>
                            <span>Pix</span>
                            <span>R$ 100,00</span>
                            <div>
                                <img onClick={()=>setEditRegister(!editRegister)} src={edit} alt="img-edit"/>
                                <img src={trash} alt="img-trash"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-summary">
                    <div className="summary">
                        <h1>Resumo</h1>
                        <div className="Appetizer">
                            <h2>Entradas</h2>
                            <span>R$ 200,00</span>
                        </div>
                        <div className="exits">
                            <h2>Saídas</h2>
                            <span>R$ 70,50</span>
                        </div>

                        <div className="balance">
                            <h3>Saldo</h3>
                            <span>R$ 190,50</span>
                        </div>
                        
                    </div>
                    <button>Adicionar Registro</button>
                </div>
            </div>
            {editRegister && <MoadalEditRegister
                setEditRegister={setEditRegister}
            />}
        </div>
    )
}

export default Home;