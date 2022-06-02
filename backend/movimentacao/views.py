from django.shortcuts import render
from .serializers import MovimentacaoSerializer
from .models import Movimentacao
from rest_framework import generics, mixins, permissions


class MovimentacaoView(generics.CreateAPIView):
    queryset = Movimentacao.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MovimentacaoSerializer