from django.db import models


class Agencia(models.Model):
    nome = models.CharField(max_length=255)
    telefone = models.CharField(max_length=255)
    numero = models.CharField(max_length=255)

    def __str__(self):
        return self.nome
