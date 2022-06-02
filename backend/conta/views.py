from django.shortcuts import render
from rest_framework import generics, mixins, permissions
from .models import Conta
from .serializers import ContaSerializer


class ContaView(generics.ListCreateAPIView):
    queryset = Conta.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ContaSerializer
