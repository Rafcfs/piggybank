import api from "./api";

export async function RequestSuport() {
    const response =
        await api.post("suporte/", {
            assunto: "test",
            servico: "AP",
            descricao: "masterard",
            idfuncionario: 1,
            idcliente: 1
        })
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
}