import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { PrimaryButton, PrimaryImput } from "../../styles/primary";
import { CenterForm } from "../MyCards/styles";
import { Container, DivButton, DivLine, FormLoan } from "./styles";

export function LoanPage() {
    return (
        <Container>
            <Header />
            <NavBar />
            <CenterForm>
                <FormLoan>
                    <DivLine>
                        <label>
                            Código Empréstimo:
                            <PrimaryImput type={"text"} />
                        </label>
                        <label>
                            Valor:
                            <PrimaryImput type={"text"} />
                        </label>
                        <div>
                        <label>
                            Data do Empréstimo:
                            <PrimaryImput type={"date"} />
                        </label>
                    </div>
                    </DivLine>
                    <DivLine>
                        <label>
                            Código Agência:
                            <PrimaryImput type={"text"} />
                        </label>
                        <label>
                            Nº da Conta:
                            <PrimaryImput type={"text"} />
                        </label>
                    </DivLine>
                    <DivButton>
                        <Link to="/menu"><PrimaryButton>Cancelar</PrimaryButton></Link>
                    </DivButton>
                    <DivButton>
                    <PrimaryButton>Solicitar Empréstimo</PrimaryButton>
                    </DivButton>
                </FormLoan>
            </CenterForm>
        </Container>
    )
}