from rest_framework import generics, permissions
from .serializers import AccountSerializer
from .models import Usuario


class AccountView(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AccountSerializer