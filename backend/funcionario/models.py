from django.db import models
from agencia.models import Agencia


class Funcionario(models.Model):

    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    salario = models.CharField(max_length=255)
    comissao = models.CharField(max_length=255)
    tipo = models.CharField(max_length=2)
    idagencia = models.ForeignKey(Agencia, on_delete=models.PROTECT)
