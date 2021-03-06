from rest_framework import generics, permissions
from .serializers import CartaoSerializer
from .models import CartaoCredito


class CartaoView(generics.CreateAPIView):
    queryset = CartaoCredito.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CartaoSerializer
