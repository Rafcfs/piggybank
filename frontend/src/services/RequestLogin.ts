import api from "./api";

export async function RequestAccount(email:  string, senha: string, senha2: string){
    const response = 
    await api.post('/cadastro/', {
        email,
        senha,
        senha2
    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })
}