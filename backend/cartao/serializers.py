from rest_framework import serializers
from .models import CartaoCredito

class CartaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartaoCredito
        fields = ('numero','validade','cvv','bandeira','saldo','limite','conta')