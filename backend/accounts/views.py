from rest_framework import generics, permissions
from .serializers import AccountSerializer
from django.contrib.auth.models import User


class AccountView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AccountSerializer