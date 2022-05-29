import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

const Support: React.FC = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <form onSubmit={() => { }}>
                <div>
                    <label>Assunto:
                        <input type={"text"} />
                    </label>
                    <label>Tipo de Serviço:
                        <select>
                            <option value="">Serviço...</option>
                            <option value="AS">Ajuda com Suporte</option>
                            <option value="AR">Ajuda com Reembolsos</option>
                            <option value="AP">Ajuda com Pagamentos</option>
                            <option value="AS">Ajuda com Senha</option>
                            <option value="AC">Ajuda com Cartão</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Descrição do problema:</label>
                    <input style={{ width: 200, height: 100 }} type={"text"} />
                </div>
                <div>
                    <Link to="/menu"> <button>Voltar ao Menu</button></Link>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Support;
