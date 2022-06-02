import React from "react";
import { Header } from "../../components/Header";
import { ButtonMain, DivImg, DivMain, DivText, OptionsUser } from "./styled";
import Logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function MainPage() {
    return (
        <div style={{ backgroundColor:"#73A580", height: 2000 }}>
            <Header />
            <div>
                <OptionsUser>
                    <Link to="/SelectRegister"><ButtonMain>
                        Cadastro
                    </ButtonMain></Link>
                    <Link to="/login">
                        <ButtonMain>
                            Fazer Login
                        </ButtonMain></Link>
                </OptionsUser>

                <DivMain>
                    <DivText>
                        <h1>VEM SER PIGGY!</h1>
                        <p>Seu jeito mais seguro e inovador de guardar dinheiro e o mais fácil de movimenta-lo! A nossa plataforma oferece a você serviços onlines totalmente seguros e precisos independente da sua localização com atendimento e suporte profissional 24 horas caso tenha algum problema, a disponibilização de cartão de crédito sem anuidade, e uma taxa de juros baixissima sobre empréstimos feitos no banco. Um jeito simples, ágil e seguro de administrar sua vida financeira! Vem ser inovador, vem ser PiggyBank você também!</p>
                    </DivText>
                    <DivImg>
                        <img src={Logo} />
                    </DivImg>
                </DivMain>
            </div>
            <Footer />
        </div>
    )
}