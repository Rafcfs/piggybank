import React from "react";
import { Container, BoxMenu, ButtonMovement, DivSaldo, JustifyCenter } from "./styles";

const Menu: React.FC = () => {
    return (
        <Container>
            <DivSaldo>
                <h4>Saldo: </h4><p>R$:1200.52</p>
            </DivSaldo>
            
            <JustifyCenter>
                <BoxMenu>
                    <ButtonMovement>
                        Depositar
                    </ButtonMovement>
                    <ButtonMovement>
                        Movimentação
                    </ButtonMovement>
                    <ButtonMovement>
                        Extrato
                    </ButtonMovement>
                    <ButtonMovement>
                        Empréstimo
                    </ButtonMovement>
                    <ButtonMovement>
                        meus Cartões
                    </ButtonMovement>
                    <ButtonMovement>
                        Suporte
                    </ButtonMovement>

                </BoxMenu>
            </JustifyCenter>

            <div>
                <button>Sair</button>
            </div>
        </Container>
    )
}

export default Menu;