import React, { useState } from "react";
import { CreateNewPeoplePhysical } from "../../services/CreateNewPhysicalPeople";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { AlignForm, ButtonCadastrar, Container, DivButton, Divdois, Divquatro, FormAling, Selectinput } from "./styles";
import { PrimaryImput } from "../../styles/primary";
import { CreateNewCont } from "../../services/CreateNewCount";

const RegisterPhysicalCustomer: React.FC = () => {

    async function handleNewPhysicalPeople(data: any) {
        const response = await CreateNewPeoplePhysical(data)
        const responsecont = await CreateNewCont(response.id)
        console.log(responsecont)
    }


    const { register, handleSubmit } = useForm()

    return (
        <Container>
            <Header />
            <h1 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>Cadastro de pessoa Fisica</h1>

            <FormAling className="card-post">
                <AlignForm className="line-post">
                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(handleNewPhysicalPeople)}>
                            <Divquatro>
                                <div className="fields">
                                    <label>Nome:</label>
                                    <PrimaryImput type="text" {...register("nome")} />
                                </div>
                                <div className="fields">
                                    <label>Sobrenome:</label>
                                    <PrimaryImput type="text" {...register("sobrenome")} />
                                </div>
                                <div className="fields">
                                    <label>Sexo:</label>
                                    <Selectinput {...register("sexo")}>
                                        <option value={"M"}>Masculino</option>
                                        <option value={"F"}>Feminino</option>
                                        <option value={"N"}>Não Binário</option>
                                    </Selectinput>
                                </div>
                                <div className="fields">
                                    <label>Estado civil:</label>
                                    <Selectinput {...register("estado_civil")}>
                                        <option value={"S"}>Solteiro</option>
                                        <option value={"C"}>Casado</option>
                                        <option value={"V"}>Viuvo</option>
                                        <option value={"D"}>Divorciado</option>
                                    </Selectinput>
                                </div>
                            </Divquatro>
                            <Divquatro>
                                <div className="fields">
                                    <label>RG:</label>
                                    <PrimaryImput type={"text"} {...register("RG")} />
                                </div>
                                <div className="fields">
                                    <label>CPF:</label>
                                    <PrimaryImput type={"text"} {...register("cpf")} />
                                </div>
                                <div className="fields">
                                    <label>Telefone:</label>
                                    <PrimaryImput type={"text"} {...register("fone")} />
                                </div>
                                <div className="fields">
                                    <label>CEP:</label>
                                    <PrimaryImput type={"text"} {...register("cep")} />
                                </div>
                            </Divquatro>
                            <Divquatro>
                                <div className="fields">
                                    <label>UF:</label>
                                    <Selectinput {...register("estado")}>
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
                                    </Selectinput>
                                </div>
                                <div className="fields">
                                    <label>Cidade:</label>
                                    <PrimaryImput type={"text"} {...register("cidade")} />
                                </div>
                                <div className="fields">
                                    <label>Bairro:</label>
                                    <PrimaryImput type={"text"} {...register("bairro")} />
                                </div>
                                <div className="fields">
                                    <label>Rua:</label>
                                    <PrimaryImput type={"text"} {...register("logradouro")} />
                                </div>
                            </Divquatro>
                            <Divdois>
                                <div className="fields">
                                    <label>Número:</label>
                                    <PrimaryImput type={"text"} {...register("numero")} />
                                </div>
                                <div className="fields">
                                    <label>Complemento:</label>
                                    <PrimaryImput type={"text"} {...register("complemento")} />
                                </div>
                            </Divdois>
                            <DivButton>
                                <ButtonCadastrar type="submit">Registrar</ButtonCadastrar>
                            </DivButton>


                        </form>
                    </div>
                </AlignForm>
            </FormAling>
        </Container>
    )
}

export default RegisterPhysicalCustomer;