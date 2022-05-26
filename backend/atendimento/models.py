from django.db import models
from django.forms import TimeField
from funcionario.models import Funcionario
from cliente.models import Cliente


class Atendimento(models.Model):
    tipo_servico = (
        ('AS', 'Ajuda com Suporte'),
        ('AP', 'Ajuda com Pagamentos'),
        ('AS', 'Ajuda com Senha'),
        ('AC', 'Ajuda com Cartão'),
        ('AR', 'Ajuda com Reembolsos'),
    )

    data = models.DateField()
    hora = models.TimeField()
    servico = models.CharField(max_length=2, choices=tipo_servico)
    descricao = models.CharField(max_length=255)
    idfuncionario = models.ForeignKey(Funcionario, on_delete=models.PROTECT)
    idcliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    def __str__(self):
        return self.idcliente
