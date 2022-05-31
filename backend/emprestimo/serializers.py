from rest_framework import serializers
from .models import Emprestimo

class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = ('id','valor','data_aplicacao','idagencia','idconta')