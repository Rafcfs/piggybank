from django.shortcuts import render
from rest_framework import generics
from .serializers import FisicaSerializer,JuridicaSerializer
from .models import Pessoa_Fisica,Pessoa_Juridica

class FisicaView(generics.CreateAPIView):
    queryset = Pessoa_Fisica.objects.all()
    serializer_class = FisicaSerializer

class JuridicaView(generics.CreateAPIView):
    queryset = Pessoa_Juridica.objects.all()
    serializer_class = JuridicaSerializer