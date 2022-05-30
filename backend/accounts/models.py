from django.db import models

# Create your models here.
class Usuario(models.Model):
    email = models.EmailField()
    senha = models.CharField(max_length=150)
    senha2 = models.CharField(max_length=150)