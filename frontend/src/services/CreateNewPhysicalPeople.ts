import api from "./api";

type PhysicalPeople = {
    nome: string;
    sobrenome: string
    fone: string;
    cep: string;
    cidade: string;
    estado: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
    RG: string;
    cpf: string;
    sexo: string;
    estado_civil: string;
}

export async function CreateNewPeoplePhysical(params: PhysicalPeople) {
    try {
        const response =
            await api.post("/pessoa/fisica", {
                nome: params.nome,
                sobrenome: params.sobrenome,
                fone: params.fone,
                cep: params.cep,
                localidade: params.cidade,
                uf: params.estado,
                logradouro: params.logradouro,
                bairro: params.bairro,
                numero: params.numero,
                complemento: params.complemento,
                RG: params.RG,
                cpf: params.cpf,
                sexo: params.sexo,
                estado_civil: params.estado_civil
            })
        return {
            id: response.data.id
        }
    } catch (error) {
        return {
            status: error
        }
    }
}
