from rest_framework import serializers
from .models import Usuario


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'email', 'senha', 'senha2')
