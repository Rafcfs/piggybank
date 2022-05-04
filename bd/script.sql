create schema piggybank_db;
use piggybank_db;


create table cliente_fisica(
	cpf bigint primary key,
    sexo text,
    dt_nascimento datetime not null
);

create table cliente_juridica(
	cnpj bigint primary key,
    insc_estadual bigint
);

create table Cliente(
	id int primary key auto_increment,
    nome text,
    fone text,
    cep text,
    localidade text,
    uf text,
    logradouro text,
    tipo_logradouro text,
    bairro text,
    numero int,
    cpf bigint,
    cnpj bigint,
    CONSTRAINT FK_cliente_fisico FOREIGN KEY (cpf) REFERENCES cliente_fisica(cpf),
    CONSTRAINT FK_cliente_juridico FOREIGN KEY (cnpj) REFERENCES cliente_juridica(cnpj)
);

create table agencia(
	id int primary key auto_increment,
    nome text(100) not null,
    telefone bigint(13),
    numero smallint(5)
);

create table Conta(
	numero bigint primary key,
    saldo decimal(10,2) not null,
    tipo text(1) not null,
    idCliente int,
    idAgencia int,
    constraint fk_cliente foreign key (idCliente) references cliente(id),
    constraint fk_agencia foreign key (idAgencia) references agencia(id)
    
);

create table funcionario(
	id int primary key auto_increment,
    nome text(255) not null, 
    salario decimal(10,2),
    comissao decimal(3,2),
    idAgencia int,
    constraint fk_agencia_func foreign key (idAgencia) references agencia(id)
);

create table Atendimento(
	id int primary key auto_increment,
    horario datetime,
    servico text(255),
    idCliente int,
    idFuncionario int,
	constraint fk_cliente_atendimento foreign key (idCliente) references cliente(id),
    constraint fk_funcionario foreign key (idFuncionario) references funcionario(id)
);

create table cartao_credito(
	numero bigint primary key not null unique,
    validade smallint not null,
    cvv smallint(3) not null,
    operadora text(1),
    saldo decimal(10,2),
    limite decimal(10,2),
    numeroConta bigint,
    constraint fk_conta_cartao foreign key (numeroConta) references conta(numero)
);

create table fatura(
	id int primary key auto_increment,
    valor decimal(10,2),
    vencimento date,
    juros_cobrar decimal(3,2),
    status_pagamento text(1),
    numeroCartao bigint,
    constraint fk_cartao foreign key (numeroCartao) references cartao_credito(numero)
);

create table Operacao(
	id tinyint primary key auto_increment,
    nome text(100),
    descricao text(255)
);

create table movimentacao(
	id int primary key auto_increment,
    valor decimal(10,2),
    data_movimentacao datetime,
    tipo text(1),
    numeroConta bigint,
    idOperacao tinyint,
    constraint fk_conta_movimentacao foreign key (numeroConta) references conta(numero),
    constraint fk_operacao foreign key (idOperacao) references operacao(id)
);

insert into cliente_fisica(cpf,sexo,dt_nascimento) values ('45539036875','M','2002-09-24');
insert into cliente_juridica(cnpj,insc_estadual) values (50033564000107,50033564000107);
insert into cliente(nome,fone,cep,localidade,uf,logradouro,tipo_logradouro,bairro,numero,cpf) values ('Rafael Carrasqueira','16991694976','15906286','Taquaritinga','SP','Reynaldo Pincetta','rua','Santa Cruz',216,45539036875);
select * from cliente inner join cliente_fisica on cliente.cpf = cliente_fisica.cpf;
select * from cliente_fisica;
select * from cliente_juridica;

