import api from "./api";

export async function CreateNewCont(id: number) {
    try {
        const response =
            await api.post("/conta/", {
                saldo: 1000,
                tipo: "CC",
                idagencia: 1,
                idcliente: id
            })
        return {
            status: response.status
        }
    } catch (error) {
        return {
            status: error
        }
    }
}