import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryButton, PrimaryImput, PrimaryLabel } from "../../styles/primary";
import { AlignForm, Container, DivButton, FormLogin, InputLogin } from "./styles";

const Cadastro: React.FC = () => {
    return (
        <Container>
            <Header />
            <AlignForm>
                <FormLogin>
                    <div>
                        <PrimaryLabel>Usuário:</PrimaryLabel>
                        <InputLogin type={"text"} />
                    </div>
                    <div>
                        <PrimaryLabel>Email:</PrimaryLabel>
                        <InputLogin type={"email"} />
                    </div>
                    <div>
                        <PrimaryLabel>Senha:</PrimaryLabel>
                        <InputLogin type={"password"} />
                    </div>
                    <DivButton style={{ display: "flex" }}>
                        <Link to="/SelectRegister"><PrimaryButton>Entrar</PrimaryButton></Link>
                    </DivButton>
                </FormLogin>
            </AlignForm>
        </Container>
    )
}

export default Cadastro;