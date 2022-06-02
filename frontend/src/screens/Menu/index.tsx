import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, BoxMenu, ButtonMovement, DivSaldo, JustifyCenter, LineButton, TitleCard } from "./styles";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import Card from '../../assets/card.png'
import Suport from '../../assets/suport.png'
import Moviment from '../../assets/moviment.png'

const Menu: React.FC = () => {
    const [valor, setValor] = useState(2202)
    return (
        <Container>
            <Header />
            <NavBar />
            <JustifyCenter>
                <BoxMenu>
                    <LineButton>
                        <Link to="/movimentacao">
                            <ButtonMovement>
                                <img src={Moviment} style={{ width: 100, marginLeft: 10 }} />
                                <TitleCard>
                                    Movimentação
                                </TitleCard>
                            </ButtonMovement>
                        </Link>
                        <Link to="/cards">
                            <ButtonMovement>
                                <img src={Card} style={{ width: 100 }} />
                                <TitleCard>
                                    Cartões
                                </TitleCard>
                            </ButtonMovement>
                        </Link>
                        <Link to="/suporte">
                            <ButtonMovement>
                                <img src={Suport} style={{ width: 100 }} />
                                <TitleCard>
                                    Suporte
                                </TitleCard>
                            </ButtonMovement>
                        </Link>
                    </LineButton>
                </BoxMenu>
            </JustifyCenter>
        </Container>
    )
}

export default Menu;