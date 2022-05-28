import React from "react";
import { Link } from "react-router-dom";
import { ButtonNavBar, Container } from "./styles";

export function NavBar() {
    return(
        <Container>
           <Link to="/menu"><ButtonNavBar>Inicio</ButtonNavBar></Link>
            <Link to="/perfil"><ButtonNavBar>Perfil</ButtonNavBar></Link>
            <Link to="/index"><ButtonNavBar>Sair</ButtonNavBar></Link>
        </Container>
    )
}