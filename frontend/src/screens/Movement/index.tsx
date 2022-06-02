import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { RequestAccount } from "../../services/RequestLogin";
import { RequestSuport } from "../../services/RequestSuport";
import { ButtonMoviment, ButtonMovimentDest, Container, Division, DivMargin, DivRadioButton, InputMoviment, TitleMoviment, ViewDestinatario, ViewOrigem } from "./styles";

export function Moviment() {
    async function HandleLogin(){
        RequestSuport()
    }

    return (
        <Container>
            <Header />
            <NavBar />
            <Division>
                <ViewOrigem>
                    <DivMargin>
                        <TitleMoviment> Dados da Conta Origem...</TitleMoviment>
                    </DivMargin>
                    <DivMargin>
                        <p>
                            Selecione o tipo de movimentação que deseja:
                        </p>
                    </DivMargin>
                    <DivRadioButton>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="radio" value="Trasferência Bancária" name="movimentacao"></input><p>Trasferência Bancária</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="radio" value="Pagamento de Contas" name="movimentacao"></input><p>Pagamento de Contas</p>
                        </div>
                    </DivRadioButton>
                        <DivMargin>
                            <label>Insira o chave do destinatário: </label>
                            <InputMoviment type={"text"} />
                            <ButtonMoviment>Veficar</ButtonMoviment>
                        </DivMargin>
                    <DivRadioButton>
                        <div>
                            <label>Valor: </label>
                            <InputMoviment type={"number"} placeholder="R$:" />
                        </div>
                        <div>
                            <label>Data: </label>
                            <InputMoviment type={"date"} disabled />
                        </div>
                    </DivRadioButton>
                    <DivMargin>
                        <label>Insira sua senha: </label>
                        <InputMoviment type={"password"} />
                    </DivMargin>
                </ViewOrigem>

                <ViewDestinatario>
                    <DivMargin>
                        <TitleMoviment>
                            Dados destinatários
                        </TitleMoviment>
                    </DivMargin>
                    <DivMargin>
                        <label>Número da conta: </label>
                        <InputMoviment type={"text"} />
                    </DivMargin>
                    <DivMargin>
                        <label>Nome da Título: </label>
                        <InputMoviment type={"text"} />
                    </DivMargin>

                    <DivMargin>
                        <Link to="/menu"> <ButtonMovimentDest>Cancelar</ButtonMovimentDest></Link>
                        <ButtonMovimentDest onClick={HandleLogin}>Trasnferir</ButtonMovimentDest>
                    </DivMargin>

                </ViewDestinatario>
            </Division>
            <Footer />
        </Container>
    )
}