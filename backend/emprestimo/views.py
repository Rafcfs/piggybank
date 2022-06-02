from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import EmprestimoSerializer
from .models import Emprestimo

class EmprestimoView(generics.CreateAPIView):
    queryset = Emprestimo.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class=EmprestimoSerializer
