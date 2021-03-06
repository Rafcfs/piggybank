import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryButton, PrimaryImput, PrimaryLabel } from "../../styles/primary";
import { AlignForm, Container, DivButton, FormLogin, InputLogin } from "./styles";

const Login: React.FC = () => {
    return (
        <Container>
            <Header />
            <AlignForm>
                <FormLogin>
                    <div>
                        <PrimaryLabel>Login:</PrimaryLabel>
                        <InputLogin type={"email"} />
                    </div>
                    <div>
                        <PrimaryLabel>Senha:</PrimaryLabel>
                        <InputLogin type={"password"} />
                    </div>
                    <DivButton style={{display: "flex"}}>
                        <Link to="/menu"><PrimaryButton>Entrar</PrimaryButton></Link>
                    </DivButton>
                </FormLogin>
            </AlignForm>
        </Container>
    )
}

export default Login;