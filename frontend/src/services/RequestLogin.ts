import api from "./api";

export async function RequestAccount(){
    const response = 
    await api.post('', {
        email: "willian@hotmail.com",
        senha: "123456789",
        senha2: "123456789"
    }).then(function(response){
        console.log(response)
    })
}