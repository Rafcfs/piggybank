
from cgitb import enable

from sqlalchemy import false, true
from django.db import models
from conta.models import Conta


class Operacao(models.Model):
    tipos = (
        ('TP', 'Transferência Pix'),
        ('TT', 'Transferência TED'),
        ('TD', 'Transferência DOC'),
        ('PB', 'Pagamento de Boleto')
    )
    nome = models.CharField(max_length=2, choices=tipos)

    def __str__(self) -> str:
        return self.nome


class Movimentacao(models.Model):
    conta_origem = models.ForeignKey(Conta, on_delete=models.CASCADE,
                                     related_name='conta_envia', default=0)
    tipo = models.ForeignKey(Operacao, on_delete=models.CASCADE)
    conta_receber = models.ForeignKey(Conta,
                                      on_delete=models.DO_NOTHING, blank=True, related_name='conta_recebe')
    valor = models.DecimalField(
        max_digits=9, decimal_places=2, blank=True)
    data_execucao = models.DateTimeField(blank=True)
    codigo_boleto = models.CharField(max_length=999, blank=True)

    class Meta:
        unique_together = ('conta_origem', 'conta_receber')

    def __str__(self):
        return self.conta_receber
