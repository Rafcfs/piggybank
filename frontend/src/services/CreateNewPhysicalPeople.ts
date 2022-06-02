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
    console.log(params.RG)
    console.log(params.cpf)
    console.log(params.sexo)
    console.log(params.estado_civil)

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
        }).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error.status)
        })
}
