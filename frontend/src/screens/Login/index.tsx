import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryButton, PrimaryImput, PrimaryLabel } from "../../styles/primary";
import { AlignForm, Container, FormLogin } from "./styles";

const Login: React.FC = () => {
    return (
        <Container>
            <Header />
            <AlignForm>
                <FormLogin>
                    <div>
                        <PrimaryLabel>Login:</PrimaryLabel>
                        <PrimaryImput type={"email"} />
                    </div>
                    <div>
                        <PrimaryLabel>Senha:</PrimaryLabel>
                        <PrimaryImput type={"password"} />
                    </div>
                    <PrimaryButton><Link to="/menu">Entrar</Link></PrimaryButton>
                    <PrimaryButton><Link to="/SelectRegister">Criar Conta</Link></PrimaryButton>
                </FormLogin>
            </AlignForm>
        </Container>
    )
}

export default Login;