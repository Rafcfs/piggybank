from rest_framework import serializers
from .models import Pessoa_Fisica, Pessoa_Juridica

class FisicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa_Fisica
        fields = ('id','nome','sobrenome','fone',
            'cep','localidade','uf','logradouro',
            'bairro','numero','complemento','RG',
            'cpf','sexo','estado_civil'
        )

class JuridicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa_Juridica
        fields = ('id','nome','sobrenome','fone',
            'cep','localidade','uf','logradouro',
            'bairro','numero','complemento','cnpj',
            'inscricao_estadual','nome_responsavel'
        )