import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../styles/primary";
import { AlingButton, AlingButtonBack, Container, DivButtonAndText } from "./styles";

export function ButtonSelectRegister() {
    return (
        <Container>
            <Header />
            <DivButtonAndText>
                <div>
                    <h1 style={{ textAlign: "center", margin: 20 }}>Deseja Criar conta de:</h1>
                </div>
                <AlingButton>
                    <div>
                        <Link to="/registerPhysical"><PrimaryButton>Pessoa Física</PrimaryButton></Link>
                    </div>
                    <div>
                        <Link to="/registerLegal"><PrimaryButton>Pessoa Juridica</PrimaryButton></Link>
                    </div>
                </AlingButton>
                <AlingButtonBack>
                    <Link to="/index"><PrimaryButton>Voltar</PrimaryButton></Link>
                </AlingButtonBack>
            </DivButtonAndText>
        </Container>
    )
}