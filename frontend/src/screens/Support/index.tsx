import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { RequestSuport } from "../../services/RequestSuport";
import { PrimaryImput } from "../../styles/primary";
import { ButtonCadastrar, Selectinput } from "../RegisterPhysicalCustomer/styles";
import { AlingForm, DivButton, FormSuport, ImportDescriptionProblem, StylesLabel } from "./styles";

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
            <AlingForm>
                <FormSuport onSubmit={handleSubmit(handleSuportRequest)}>
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
                        <ImportDescriptionProblem type={"text"} />
                    </div>
                    <DivButton>
                        <Link to="/menu"> <ButtonCadastrar>Voltar ao Menu</ButtonCadastrar></Link>
                        <ButtonCadastrar type="submit">Enviar</ButtonCadastrar>
                    </DivButton>
                </FormSuport>
            </AlingForm>
        </div>
    )
}

export default Support;
