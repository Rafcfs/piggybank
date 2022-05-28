import React from "react";
import { Link } from "react-router-dom";

const Support: React.FC = () => {
    return (
        <div>
            <div>
                <label>Assunto:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Tipo de Serviço:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Descrição do problema:</label>
                <input style={{ width: 200, height: 100 }} type={"text"} />
            </div>
            <div>
                <Link to="/menu"> <button>Voltar ao Menu</button></Link>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default Support;
