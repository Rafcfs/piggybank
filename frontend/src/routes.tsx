import { Navigate, Route, Routes } from "react-router-dom"
import { ButtonSelectRegister } from "./screens/ButtonSelectRegister"
import Cadastro from "./screens/NewCadastro"
import Login from "./screens/Login"
import { MainPage } from "./screens/MainPage"
import Menu from "./screens/Menu"
import { Moviment } from "./screens/Movement"
import { MyCards } from "./screens/MyCards"
import { Profile } from "./screens/Profile"
import RegisterLegalClient from "./screens/RegisterLegalClient"
import RegisterPhysicalCustomer from "./screens/RegisterPhysicalCustomer"
import Support from "./screens/Support"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/suporte" element={<Support />} />
            <Route path="/index" element={<MainPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/cards" element={<MyCards />} />
            <Route path="/movimentacao" element={<Moviment />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/registerLegal" element={<RegisterLegalClient />} />
            <Route path="/registerPhysical" element={<RegisterPhysicalCustomer />} />
            <Route path="/SelectRegister" element={<ButtonSelectRegister />} />
            <Route path="*" element={<Navigate to="/index" />} />
        </Routes>
    )
}