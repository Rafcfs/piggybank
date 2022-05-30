from rest_framework import serializers
from .models import Pessoa_Fisica

class FisicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa_Fisica
        fields = ('id','nome','sobrenome','fone',
            'cep','localidade','uf','logradouro',
            'bairro','numero','complemento','RG',
            'cpf','sexo','nascimento','estado_civil'
        )