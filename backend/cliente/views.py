from django.shortcuts import render
from rest_framework import generics
from .serializers import FisicaSerializer
from .models import Pessoa_Fisica

class FisicaView(generics.CreateAPIView):
    queryset = Pessoa_Fisica.objects.all()
    serializer_class = FisicaSerializer