import React from "react";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { ViewOne } from "./stlyes";

export function Profile() {
    return (
        <div>
            <Header />
            <NavBar />
            <ViewOne>
                <label>
                    Nome:
                    <input type={"text"} />
                </label>
                <label>
                    Sobrenome:
                    <input type={"text"} />
                </label>
                <label>
                    Data de Nascimento:
                    <input type={"date"} />
                </label>
                <label>
                    Estado Cívil:
                    <select>
                        <option value="Solteiro">Solteiro(a)</option>
                        <option value="Casado">Casado(a)</option>
                        <option value="Viuvo">Viuvo(a)</option>
                    </select>
                </label>
            </ViewOne>
            <ViewOne>
                <label>
                    Sexo:
                    <input type={"text"} />
                </label>
                <label>
                    RG:
                    <input type={"text"} />
                </label>
                <label>
                    CPF:
                    <input type={"text"} />
                </label>
            </ViewOne>
            <ViewOne>
                <label>
                    Email:
                    <input type={"text"} />
                </label>
                <label>
                    Telefone:
                    <input type={"text"} />
                </label>
                <label>
                    CEP:
                    <input type={"text"} />
                </label>
            </ViewOne>
            <ViewOne>
                <label>
                    Nome da Rua:
                    <input type={"text"} />
                </label>
                <label>
                    Bairro:
                    <input type={"text"} />
                </label>
                <label>
                    Número:
                    <input type={"text"} />
                </label>
            </ViewOne>
            <ViewOne>
                <label>
                    Cidade:
                    <input type={"text"} />
                </label>
                <label>
                    UF:
                    <select>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Minas Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernanbuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="DF">Distrito Federal</option>
                    </select>
                </label>
            </ViewOne>
            <div>
                <button>Editar</button>
                <button>Salvar</button>
            </div>
        </div>
    )
}