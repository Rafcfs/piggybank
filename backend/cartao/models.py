from django.db import models

from conta.models import Conta


class CartaoCredito(models.Model):
    operadoras = {
        ('MC', 'MasterCard'),
        ('VS', 'Visa'),
        ('EL', 'ELO'),
        ('HC', 'HiperCard')
    }

    numero = models.CharField(max_length=16, unique=True)
    validade = models.DateField()
    cvv = models.CharField(max_length=3)
    bandeira = models.CharField(max_length=2, choices=operadoras)
    saldo = models.DecimalField(max_digits=9, decimal_places=2, blank=True)
    limite = models.DecimalField(max_digits=9, decimal_places=2)
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE)

    def __str__(self):
        return self.numero

    class Meta:
        verbose_name = 'Cartão de Crédito'
        verbose_name_plural = 'Cartões de Crédito'


class Fatura(models.Model):
    opcoes = {
        ('PA', 'Pagamento Aprovado'),
        ('PN', 'Pagamento Não Identificado')
    }
    valor = models.DecimalField(max_digits=9, decimal_places=2)
    vencimento = models.DateField()
    jurus = models.DecimalField(max_digits=3, decimal_places=2, default=5.5)
    status = models.CharField(max_length=2, choices=opcoes)

    def __str__(self):
        return self.pk
