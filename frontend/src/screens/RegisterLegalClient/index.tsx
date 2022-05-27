import React from "react";

const RegisterLegalClient: React.FC = () => {
    return (
        <div>
            <div>
                <label>Nome da Empresa:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Nome do Responsável:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>CNPJ:</label>
                <input type={"number"} />
            </div>
            <div>
                <label>Inscrição Estadual:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Telefone:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Email:</label>
                <input type={"email"} />
            </div>
            <div>
                <label>CPF:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Localidade:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Estado:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Logradouro:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Bairro:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Número:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Complemento:</label>
                <input type={"Text"} />
            </div>
            <div>
                <label>Senha:</label>
                <input type={"password"} />
            </div>
            <button onClick={() => {}}>Registrar</button>
        </div>
    )
}

export default RegisterLegalClient;