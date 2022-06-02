from django.shortcuts import render
from rest_framework import generics
from .serializers import AtendimentoSerializer
from .models import Atendimento

class AtendimentoView(generics.CreateAPIView):
    queryset = Atendimento.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AtendimentoSerializer
