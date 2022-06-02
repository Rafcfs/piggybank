import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { CreateNewLegalPeople } from "../../services/CreateNewLegalPeople";
import { PrimaryImput } from "../../styles/primary";
import { AlignForm, ButtonCadastrar, DivButton, Divquatro, FormAling, Selectinput } from "../RegisterPhysicalCustomer/styles";

const RegisterLegalClient: React.FC = () => {

    async function handleNewLegalPeople(data: any) {
        const response = await CreateNewLegalPeople(data)
    }   

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>Cadastro de pessoa Jurídica</h1>
            <FormAling>
                <AlignForm>
                    <div>
                        <form onSubmit={handleSubmit(handleNewLegalPeople)}>
                            <Divquatro>
                                <div>
                                    <label>Nome:</label>
                                    <PrimaryImput type={"Text"} {...register("nome")} />
                                </div>
                                <div>
                                    <label>Sobrenome:</label>
                                    <PrimaryImput type={"Text"} {...register("sobrenome")} />
                                </div>
                                <div>
                                    <label>Telefone:</label>
                                    <PrimaryImput type={"Text"} {...register("fone")}/>
                                </div>
                                <div>
                                    <label>CNPJ:</label>
                                    <PrimaryImput type={"text"} {...register("cnpj")} />
                                </div>
                            </Divquatro>
                            <Divquatro>
                                <div>
                                    <label>Inscrição Estadual:</label>
                                    <PrimaryImput type={"Text"} {...register("inscricao_estadual")} />
                                </div>
                                <div>
                                    <label>Nome do Responsável:</label>
                                    <PrimaryImput type={"Text"} {...register("nome_responsavel")} />
                                </div>
                                <div>
                                    <label>CEP:</label>
                                    <PrimaryImput type={"Text"} {...register("cep")} />
                                </div>
                                <div>
                                    <label>Cidade:</label>
                                    <PrimaryImput type={"Text"} {...register("cidade")} />
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
                                <div>
                                    <label>Logradouro:</label>
                                    <PrimaryImput type={"Text"} {...register("logradouro")} />
                                </div>
                                <div>
                                    <label>Bairro:</label>
                                    <PrimaryImput type={"Text"} {...register("bairro")} />
                                </div>
                            </Divquatro>
                            <Divquatro>
                                <div>
                                    <label>Número:</label>
                                    <PrimaryImput type={"Text"} {...register("numero")} />
                                </div>
                                <div>
                                    <label>Complemento:</label>
                                    <PrimaryImput type={"Text"} {...register("complemento")} />
                                </div>
                            </Divquatro>
                            <DivButton>
                                <ButtonCadastrar type="submit">Registrar</ButtonCadastrar>
                            </DivButton>
                        </form>
                    </div>
                </AlignForm>
            </FormAling>

        </div>
    )
}

export default RegisterLegalClient;