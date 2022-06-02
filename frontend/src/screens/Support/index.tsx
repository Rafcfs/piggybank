import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { RequestSuport } from "../../services/RequestSuport";
import { PrimaryImput } from "../../styles/primary";
import { Selectinput } from "../RegisterPhysicalCustomer/styles";

const Support: React.FC = () => {

    async function handleSuportRequest(data: any) {
        RequestSuport(data)
    }

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <Header />
            <NavBar />
            <h1 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>Suporte</h1>
            <div>
                <form onSubmit={handleSubmit(handleSuportRequest)}>
                    <div>
                        <label>Assunto:
                            <PrimaryImput type={"text"} {...register("assunto")} />
                        </label>
                        <label>Tipo de Serviço:
                            <Selectinput {...register("servico")}>
                                <option value="">Serviço...</option>
                                <option value="AS">Ajuda com Suporte</option>
                                <option value="AR">Ajuda com Reembolsos</option>
                                <option value="AP">Ajuda com Pagamentos</option>
                                <option value="AS">Ajuda com Senha</option>
                                <option value="AC">Ajuda com Cartão</option>
                            </Selectinput>
                        </label>
                    </div>
                    <div>
                        <label>Descrição do problema:</label>
                        <input {...register("descricao")} style={{ width: 200, height: 100, display: "flex", justifyContent: "flex-start" }} type={"text"} />
                    </div>
                    <div>
                        <Link to="/menu"> <button>Voltar ao Menu</button></Link>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Support;
