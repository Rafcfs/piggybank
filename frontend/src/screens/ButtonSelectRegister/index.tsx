import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../styles/primary";
import { AlingButton, Container, DivButton, DivButtonAndText } from "./styles";

export function ButtonSelectRegister() {
    return (
        <Container>
            <Header />
            <DivButtonAndText>
                <div>
                    <h1>Deseja Criar conta de:</h1>
                </div>
                <AlingButton>
                    <Link to="/registerPhysical"><PrimaryButton>Pessoa Física</PrimaryButton></Link>
                    <Link to="/registerLegal"><PrimaryButton>Pessoa Juridica</PrimaryButton></Link>
                </AlingButton>
                <DivButton>
                    <Link to="/login"><PrimaryButton>Voltar</PrimaryButton></Link>
                </DivButton>
            </DivButtonAndText>
        </Container>
    )
}