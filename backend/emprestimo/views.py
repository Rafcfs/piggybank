from django.shortcuts import render
from rest_framework import generics
from .serializers import EmprestimoSerializer
from .models import Emprestimo

class EmprestimoView(generics.CreateAPIView):
    queryset = Emprestimo.objects.all()
    serializer_class=EmprestimoSerializer