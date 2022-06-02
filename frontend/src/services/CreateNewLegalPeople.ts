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

    console.log(params.nome)
    console.log(params.sobrenome)
    console.log(params.fone)
    console.log(params.cep)
    console.log(params.cidade)
    console.log(params.estado)
    console.log(params.logradouro)
    console.log(params.bairro)
    console.log(params.numero)
    console.log(params.complemento)
    console.log(params.cnpj)
    console.log(params.inscricao_estadual)
    console.log(params.nome_responsavel)

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
        }).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error.status)
        })
}