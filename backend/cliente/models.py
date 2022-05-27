import requests
from django.db import models


class Cliente(models.Model):
    estados = (
        ('AC', 'Acre'),
        ('AL', 'Alagoas'),
        ('AP', 'Amapa'),
        ('AM', 'Amazonas'),
        ('BA', 'Bahia'),
        ('CE', 'Ceara'),
        ('DF', 'Distrito Federal'),
        ('ES', 'Espirito Santo'),
        ('GO', 'Goiania'),
        ('MA', 'Maranhao'),
        ('MT', 'Mato Grosso'),
        ('MS', 'Mato Grosso do Sul'),
        ('MG', 'Minas Gerais'),
        ('PA', 'Para'),
        ('PB', 'Paraiba'),
        ('PR', 'Parana'),
        ('PE', 'Pernambuco'),
        ('PI', 'Piaui'),
        ('RJ', 'Rio de Janeiro'),
        ('RN', 'Rio Grande do Norte'),
        ('RS', 'Rio Grande do Sul'),
        ('RO', 'Rondonia'),
        ('RR', 'Roraima'),
        ('SC', 'Santa Catarina'),
        ('SP', 'Sao Paulo'),
        ('SE', 'Sergipe'),
        ('TO', 'Tocantins')
    )

    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    fone = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    cep = models.CharField(max_length=150)
    localidade = models.CharField(max_length=255)
    uf = models.CharField(max_length=2, choices=estados)
    logradouro = models.CharField(max_length=255)
    bairro = models.CharField(max_length=255)
    numero = models.CharField(max_length=150, blank=True)
    complemento = models.CharField(max_length=150, blank=True)


class Pessoa_Fisica(Cliente):
    RG = models.CharField(max_length=9, default=000000000)
    cpf = models.CharField(max_length=50)
    
    SEXOS = (
        ('M', 'Masculino'),
        ('F', 'Feminino'),
        ('N', 'Não Binário')
    )
    sexo = models.CharField(max_length=1, choices=SEXOS)
    nascimento = models.DateField()
    ESTADOS_CIVIS = (
        ('S', 'Solteiro'),
        ('C', 'Casado'),
        ('V', 'Viuvo'),
        ('D', 'Divorciado')
    )
    estado_civil = models.CharField(max_length=1, choices=ESTADOS_CIVIS)

    def __str__(self):
        return self.nome

    class Meta:
        verbose_name = 'Pessoa Física'
        verbose_name_plural = 'Pessoas Físicas'


class Pessoa_Juridica(Cliente):
    cnpj = models.CharField(max_length=50)
    inscricao_estadual = models.CharField(max_length=50)
    nome_responsavel = models.CharField(max_length=255)

    def __str__(self):
        return self.nome
