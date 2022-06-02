import api from "./api";

export async function GeneratorCardCredit() {
    const response =
        await api.post("/cartao/", {
            validade: "30/06/2002",
            cvv: "123",
            bandeira: "MC",
            saldo: Math.random() * (10000 - 1000) + 1000,
            limite: Math.random() * (1000 - 500) + 500,
            conta: 534
        }).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error.status)
        })
}