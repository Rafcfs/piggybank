import React from "react";
import { Link } from "react-router-dom";
import { Container, BoxMenu, ButtonMovement, DivSaldo, JustifyCenter, LineButton } from "./styles";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

const Menu: React.FC = () => {
    return (
        <Container>
            <Header />
            <NavBar />
            <DivSaldo>
                <h4>Saldo: </h4><p>R$:1200.52</p>
            </DivSaldo>

            <JustifyCenter>
                <BoxMenu>
                    <LineButton>
                        <ButtonMovement>
                            Depositar
                        </ButtonMovement>
                        <Link to="/movimentacao">
                            <ButtonMovement>
                                Movimentação
                            </ButtonMovement>
                        </Link>
                        <ButtonMovement>
                            Extrato
                        </ButtonMovement>
                    </LineButton>
                    <LineButton>
                        <ButtonMovement>
                            Empréstimo
                        </ButtonMovement>
                        <Link to="/cards">
                            <ButtonMovement>
                                meus Cartões
                            </ButtonMovement>
                        </Link>
                        <Link to="/suporte">
                            <ButtonMovement>
                                Suporte
                            </ButtonMovement>
                        </Link>
                    </LineButton>
                </BoxMenu>
            </JustifyCenter>
        </Container>
    )
}

export default Menu;