import React from "react";
import { Header } from "../../components/Header";
import { ButtonMain, DivImg, DivMain, DivText, OptionsUser } from "./styled";
import Logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function MainPage() {
    return (
        <div>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus, justo nec dictum hendrerit, lorem magna porttitor tortor, eget mollis libero massa non dui. Integer tincidunt in lectus eu porttitor. Cras fermentum enim sed cursus bibendum. Nullam porttitor pharetra est et suscipit. Curabitur eget orci tempus, accumsan arcu a, gravida turpis. Nunc porttitor vitae ex vitae posuere. Donec interdum congue erat et rhoncus. Donec aliquam velit vel malesuada sodales. Cras viverra fermentum sapien, sit amet volutpat justo dictum in. Ut id elit pharetra, hendrerit ipsum et, scelerisque tellus. Quisque viverra luctus enim, at sollicitudin dolor malesuada eu. Curabitur ut interdum magna, at rutrum eros. Duis sollicitudin est ullamcorper lacus pulvinar, commodo fringilla dolor vulputate.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus, justo nec dictum hendrerit, lorem magna porttitor tortor, eget mollis libero massa non dui. Integer tincidunt in lectus eu porttitor. Cras fermentum enim sed cursus bibendum. Nullam porttitor pharetra est et suscipit. Curabitur eget orci tempus, accumsan arcu a, gravida turpis. Nunc porttitor vitae ex vitae posuere. Donec interdum congue erat et rhoncus. Donec aliquam velit vel malesuada sodales. Cras viverra fermentum sapien, sit amet volutpat justo dictum in. Ut id elit pharetra, hendrerit ipsum et, scelerisque tellus. Quisque viverra luctus enim, at sollicitudin dolor malesuada eu. Curabitur ut interdum magna, at rutrum eros. Duis sollicitudin est ullamcorper lacus pulvinar, commodo fringilla dolor vulputate.</p>
                    </DivText>
                    <DivImg>
                        <img src={Logo} />
                    </DivImg>
                </DivMain>
            </div>
            <Footer/>
        </div>
    )
}