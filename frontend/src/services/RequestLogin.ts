import { type } from "os";
import api from "./api";

type login = {
    username: string;
    email: string;
    password: string
}

export async function RequestAccount(params: login) {
    const response =
        await api.post('/cadastro/', {
            email: params.email,
            senha: params.password,
            senha2: params.username
        }).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error)
        })
}