from rest_framework import serializers
from .models import Movimentacao

class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = ('id','conta_origem','tipo','conta_receber','valor','data_execucao','codigo_boleto')