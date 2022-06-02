import api from "./api";

type LegalPeople = {
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
    cnpj: string;
    inscricao_estadual: string;
    nome_responsavel: string;
}

export async function CreateNewLegalPeople(params: LegalPeople) {
    try {
        const response =
            await api.post("/pessoa/juridica", {
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
                cnpj: params.cnpj,
                inscricao_estadual: params.inscricao_estadual,
                nome_responsavel: params.nome_responsavel
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