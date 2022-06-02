import email
from click import style
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Usuario


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'email', 'senha', 'senha2')


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(
        label='email',
        write_only=True
    )
    senha = serializers.CharField(
        label='senha',
        style = {'input_type':'password'},
        trim_whitespace=False,
        write_only=True
    )

    def validate(self,attrs):
        email = attrs.get('Email')
        senha = attrs.get('senha')

        if email and senha:
            user = authenticate(request=self.contex.get('request'),
                                    email=email,password=senha)
            if not user:
                print('acesso negado')
        else:
            print('usuario e/ou senha invalidos')

        attrs['user']=user
        return attrs                                    
    
