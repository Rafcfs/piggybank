from django.db import models
from agencia.models import Agencia
from cliente.models import Cliente


class Conta(models.Model):
    tipo_conta = (
        ('CC', 'Conta Corrente'),
        ('CP', 'Conta Poupança'),
        ('CS', 'Conta Salario'),
    )

    numero = models.CharField(max_length=255)
    saldo = models.CharField(max_length=255)
    tipo = models.CharField(max_length=2, choices=tipo_conta)
    idagencia = models.ForeignKey(Agencia, on_delete=models.PROTECT)
    idcliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
