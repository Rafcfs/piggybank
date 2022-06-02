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
                    <div style={{display: "flex"}}>
                        <Link to="/menu"><PrimaryButton>Entrar</PrimaryButton></Link>
                        <Link to="/SelectRegister"><PrimaryButton>Criar Conta</PrimaryButton></Link>
                    </div>
                </FormLogin>
            </AlignForm>
        </Container>
    )
}

export default Login;