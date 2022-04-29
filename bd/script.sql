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

insert into cliente_fisica(cpf,sexo,dt_nascimento) values ('45539036875','M','2002-09-24');
insert into cliente_juridica(cnpj,insc_estadual) values (50033564000107,50033564000107);
select * from cliente_fisica;
select * from cliente_juridica

