import api from "./api";

type Suport = {
    assunto: string;
    servico: string;
    descricao: string;
}

export async function RequestSuport(params: Suport) {
    const response =
        await api.post("suporte/", {
            assunto: params.assunto,
            servico: params.servico,
            descricao: params.descricao,
            idfuncionario: 1,
            idcliente: 1
        })
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
}