import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryButton, PrimaryImput, PrimaryLabel } from "../../styles/primary";
import { AlignForm, Container, DivButton, FormLogin } from "./styles";

const Login: React.FC = () => {
    return (
        <Container>
            <Header />
            <AlignForm>
                <FormLogin>
                    <div>
                        <label>
                            Email:
                            <PrimaryImput type={"text"} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Senha:
                            <PrimaryImput type={"password"} />
                        </label>
                    </div>
                    <DivButton>
                        <Link to="/menu"><PrimaryButton>Entrar</PrimaryButton></Link>
                    </DivButton>
                </FormLogin>
            </AlignForm>
        </Container>
    )
}

export default Login;