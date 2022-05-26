from django.db import models
from conta.models import Conta
from agencia.models import Agencia


class Emprestimo(models.Model):
    valor = models.CharField(max_length=255)
    data_aplicacao = models.DateField()
    idagencia = models.ForeignKey(Agencia, on_delete=models.PROTECT)
    idconta = models.ForeignKey(Conta, on_delete=models.PROTECT)

    def __str__(self):
        return self.idconta
