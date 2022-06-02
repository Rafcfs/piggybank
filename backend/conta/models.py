from django.db import models
from agencia.models import Agencia
from cliente.models import Cliente


class Conta(models.Model):
    tipo_conta = (
        ('CC', 'Conta Corrente'),
        ('CP', 'Conta Poupança'),
        ('CS', 'Conta Salario'),
    )

    numero = models.AutoField(unique=True, primary_key=True)
    saldo = models.DecimalField(max_digits=9, decimal_places=2, default=100.00)
    tipo = models.CharField(max_length=2, choices=tipo_conta, default='CC')
    idagencia = models.ForeignKey(Agencia, on_delete=models.PROTECT)
    idcliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    def __str__(self):
        return self.numero
