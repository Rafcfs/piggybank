import React from "react";
import { CreateNewPeoplePhysical } from "../../services/CreateNewPhysicalPeople";

const RegisterPhysicalCustomer: React.FC = () => {

    async function handleNewPhysicalPeople() {
        const response = await CreateNewPeoplePhysical(
            "rafa",
            "proni",
            "16981267873",
            "15900005",
            "Taquaritinga",
            "SP",
            "Rua 1",
            "Centro",
            "567",
            "Casa",
            "123456789",
            "12332112332",
            "M",
            "30/06/2002",
            "S"
        )
    }

    return (
        <>
            <div>
                <label>Nome de Usuário:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Email:</label>
                <input type={"email"} />
            </div>
            <div>
                <label>Data Nascimento:</label>
                <input type={"date"} />
            </div>
            <div>
                <label>Sexo:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Estado civil:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>RG:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>CPF:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Telefone:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>CEP:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Estado:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Cidade:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Bairro:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Rua:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Número:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Número:</label>
                <input type={"text"} />
            </div>
            <div>
                <label>Senha:</label>
                <input type={"password"} />
            </div>
            <button onClick={handleNewPhysicalPeople}>Registrar</button>
        </>
    )
}

export default RegisterPhysicalCustomer;