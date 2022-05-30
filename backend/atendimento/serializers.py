from rest_framework import serializers
from .models import Atendimento

class AtendimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atendimento
        fields = ('id','data','hora','assunto','servico','descricao')