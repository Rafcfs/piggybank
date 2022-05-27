import React from "react";

const Support: React.FC = () => {
    return (
        <div>
            <div>
                <label>Assunto:</label>
                <input type={"text"}/>
            </div>
            <div>
                <label>Tipo de Serviço:</label>
                <input type={"text"}/>
            </div>
            <div>
                <label>Descrição do problema:</label>
                <input style={{width: 200, height: 100}} type={"text"}/>
            </div>
            <div>
                <button>Voltar ao Menu</button>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default Support;
