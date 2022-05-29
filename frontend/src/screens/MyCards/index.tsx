import React, { useState } from "react";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { PrimaryImput } from "../../styles/primary";
import { CenterForm, Container, DivGridOne, DivGridTwo, FormCard, LabelInput } from "./styles";

export function MyCards() {

    const Card = {
        numberCard: 5437965951755202,
        validity: "30/03/2029",
        CVV: 626,
        numberAccount: 12345342,
        operator: "Visa",
        balance: 200,
        limit: 1200
    }

    const [card, setCard] = useState(Card)

    return (
        <Container>
            <Header />
            <NavBar />
            <CenterForm>
                <FormCard>
                    <DivGridOne>
                        <LabelInput>Número do Cartão:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.numberCard} />
                        <LabelInput>Validade:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.validity} />
                        <LabelInput>CVV:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.CVV} />
                        <LabelInput>Operadoras:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.operator} />
                    </DivGridOne>
                    <DivGridTwo>
                        <LabelInput>Número da Conta:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.numberAccount} />
                        <LabelInput>Saldo:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.balance} />
                        <LabelInput>Limite:</LabelInput>
                        <PrimaryImput type={"text"} disabled value={card.limit} />
                    </DivGridTwo>
                </FormCard>
            </CenterForm>
        </Container>
    )
}