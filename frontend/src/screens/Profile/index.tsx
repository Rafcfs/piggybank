import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { CenterView, DivButton, FormView, InputProfile, SelectProfile, ViewOne } from "./stlyes";
import api from "../../services/api";
import { PrimaryButton } from "../../styles/primary";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <div>
            <Header />
            <NavBar />
            <CenterView>
                <FormView>
                    <ViewOne>
                        <label>
                            Nome:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Sobrenome:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Data de Nascimento:
                            <InputProfile type={"date"} />
                        </label>
                    </ViewOne>
                    <ViewOne>
                        <label>
                            Estado Cívil:
                            <SelectProfile>
                                <option value="Solteiro">Solteiro(a)</option>
                                <option value="Casado">Casado(a)</option>
                                <option value="Viuvo">Viuvo(a)</option>
                            </SelectProfile>
                        </label>
                        <label>
                            Sexo:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            RG:
                            <InputProfile type={"text"} />
                        </label>
                    </ViewOne>
                    <ViewOne>
                        <label>
                            CPF:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Email:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Telefone:
                            <InputProfile type={"text"} />
                        </label>

                    </ViewOne>
                    <ViewOne>
                        <label>
                            CEP:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Nome da Rua:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Bairro:
                            <InputProfile type={"text"} />
                        </label>
                    </ViewOne>
                    <ViewOne>
                        <label>
                            Número:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            Cidade:
                            <InputProfile type={"text"} />
                        </label>
                        <label>
                            UF:
                            <SelectProfile>
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
                            </SelectProfile>
                        </label>
                    </ViewOne>
                    <DivButton>
                       <Link to="/menu"> <PrimaryButton>Voltar</PrimaryButton></Link>
                        <PrimaryButton>Salvar</PrimaryButton>
                    </DivButton>
                </FormView>
            </CenterView>
        </div>
    )
}