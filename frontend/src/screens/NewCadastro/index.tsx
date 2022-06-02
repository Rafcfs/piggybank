import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { PrimaryButton, PrimaryImput, PrimaryLabel } from "../../styles/primary";
import { RequestAccount } from "../../services/RequestLogin";
import { AlignForm, Container, DivButton, FormLogin, InputLogin } from "../Login/styles";

const Cadastro: React.FC = () => {

    async function handleNewRegister(data: any){
        RequestAccount(data)
    }
    const { register, handleSubmit } = useForm()

    return (
        <Container>
            <Header />
            <form onSubmit={handleSubmit(handleNewRegister)}>
                <FormLogin onSubmit={handleNewRegister}>
                    <div>
                        <PrimaryLabel>Usuário:</PrimaryLabel>
                        <InputLogin type={"text"} {...register("username")}/>
                    </div>
                    <div>
                        <PrimaryLabel>Email:</PrimaryLabel>
                        <InputLogin type={"email"} {...register("email")}/>
                    </div>
                    <div>
                        <PrimaryLabel>Senha:</PrimaryLabel>
                        <InputLogin type={"password"} {...register("password")} />
                    </div>
                    <DivButton style={{ display: "flex" }}>
                        <button type="submit">Cadastrar</button>
                    </DivButton>
                </FormLogin>
            </form>
        </Container>
    )
}

export default Cadastro;