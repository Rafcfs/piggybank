import React, { useState } from "react";
import { CreateNewPeoplePhysical } from "../../services/CreateNewPhysicalPeople";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";

const RegisterPhysicalCustomer: React.FC = () => {
    
    async function handleNewPhysicalPeople(data: any) {
        const response = await CreateNewPeoplePhysical(data)
    }


    const { register, handleSubmit } = useForm()

    return (
        <div>
            <Header />
            <div className="card-post">
                <h1>Cadastro de pessoa Fisica</h1>
                <div className="line-post"></div>
                <div className="card-body-post">

                    <form onSubmit={handleSubmit(handleNewPhysicalPeople)}>
                        <div className="fields">
                            <label>Nome:</label>
                            <input type="text" {...register("nome")} />
                        </div>
                        <div className="fields">
                            <label>Sobrenome:</label>
                            <input type="text" {...register("sobrenome")} />
                        </div>
                        <div className="fields">
                            <label>Sexo:</label>
                            <select {...register("sexo")}>
                                <option value={"M"}>Masculino</option>
                                <option value={"F"}>Feminino</option>
                                <option value={"B"}>Não Binário</option>
                            </select>
                        </div>
                        <div className="fields">
                            <label>Estado civil:</label>
                            <select {...register("estado_civil")}>
                                <option value={"S"}>Solteiro</option>
                                <option value={"C"}>Casado</option>
                                <option value={"V"}>Viuvo</option>
                                <option value={"D"}>Divorciado</option>
                            </select>
                        </div>
                        <div className="fields">
                            <label>RG:</label>
                            <input type={"text"} {...register("RG")} />
                        </div>
                        <div className="fields">
                            <label>CPF:</label>
                            <input type={"text"} {...register("cpf")} />
                        </div>
                        <div className="fields">
                            <label>Telefone:</label>
                            <input type={"text"} {...register("fone")} />
                        </div>
                        <div className="fields">
                            <label>CEP:</label>
                            <input type={"text"} {...register("cep")} />
                        </div>
                        <div className="fields">
                            <label>UF:</label>
                            <select {...register("estado")}>
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
                        </div>
                        <div className="fields">
                            <label>Cidade:</label>
                            <input type={"text"} {...register("cidade")} />
                        </div>
                        <div className="fields">
                            <label>Bairro:</label>
                            <input type={"text"} {...register("bairro")} />
                        </div>
                        <div className="fields">
                            <label>Rua:</label>
                            <input type={"text"} {...register("logradouro")} />
                        </div>
                        <div className="fields">
                            <label>Número:</label>
                            <input type={"text"} {...register("numero")} />
                        </div>
                        <div className="fields">
                            <label>Complemento:</label>
                            <input type={"text"} {...register("complemento")} />
                        </div>
                        <div className="btn-post">
                            <button type="submit">Registrar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default RegisterPhysicalCustomer;