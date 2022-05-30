from django.shortcuts import render
from rest_framework import generics
from .serializers import AtendimentoSerializer
from .models import Atendimento

class AtendimentoView(generics.CreateAPIView):
    queryset = Atendimento.objects.all()
    serializer_class = AtendimentoSerializer
