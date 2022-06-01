import api from "./api";

type PhysicalPeople = {
    name: string;
    lastName: string
    phone: string;
    cep: string;
    locality: string;
    uf: string;
    publicPlace: string;
    district: string;
    number: string;
    complement: string;
    RG: string;
    CPF: string;
    sex: string;
    birth: string;
    maritalStatus: string;
}

export async function CreateNewPeoplePhysical(name: string, lastName: string, phone: string, cep: string, locality: string, uf: string, publicPlace: string, district: string, number: string, complement: string, RG: string, CPF: string, sex: string, birth: string, maritalStatus: string){
    console.log(name)
    console.log(lastName)
    console.log(phone)
    console.log(cep)
    const response = 
        await api.post("pessoa/fisica", {
            nome: name,
            sobrenome: lastName,
            fone: phone,
            cep: cep,
            localidade: locality,
            uf: uf,
            logradouro: publicPlace,
            bairro: district,
            numero: number,
            complemento: complement,
            RG: RG,
            cpf: CPF,
            sexo: sex,
            nascimento: birth,
            estado_civil: maritalStatus
        }).then(function(response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error.status)
        })
}

// export async function CreateNewPeoplePhysical(name: string, lastName: string, phone: string, cep: string, locality: string, uf: string, publicPlace: string, district: string, number: string, complement: string, RG: string, CPF: string, sex: string, birth: string, maritalStatus: string){
//     console.log(name)
//     console.log(lastName)
//     console.log(phone)
//     console.log(cep)
//     const response = 
//         await api.post("pessoafisica/", {
//             name,
//             lastName,
//             phone,
//             cep,
//             locality,
//             uf,
//             publicPlace,
//             district,
//             number,
//             complement,
//             RG,
//             CPF,
//             sex,
//             birth,
//             maritalStatus
//         })
//         return response.status
// }