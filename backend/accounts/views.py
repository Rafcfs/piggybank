from django.shortcuts import render, redirect
from rest_framework import generics
from .serializers import AccountSerializer
from .models import Usuario

class AccountView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = AccountSerializer
    

'''

def index(request):
    return render(request, 'accounts/index.html')


def login(request):
    return render(request, 'accounts/login.html')


def logout(request):
    return render(request, 'accounts/logout.html')


def cadastro(request):
    if request.method != 'POST':
        return render(request, 'accounts/cadastro.html')

    email = request.POST.get('email')
    senha2 = request.POST.get('senha2')
    senha = request.POST.get('senha')

    # TODO MENSAGENS
    if not email or not senha or not senha2:
        print('vazio')
        return render(request, 'accounts/cadastro.html')

    if not senha == senha2:
        print(senha)
        return render(request, 'accounts/cadastro.html')

    try:
        validate_email(email)
    except:
        print('email invalido')
        return render(request, 'accounts/cadastro.html')

    if len(senha) <= 6:
        print('curta')
        return render(request, 'accounts/cadastro.html')

    if Usuario.objects.filter(email=email).exists():
        print('cadastrado')
        return render(request, 'accounts/cadastro.html')

    usuario = Usuario.objects.create(email=email, senha=senha, senha2=senha2)

    usuario.save()

    data = [
        email,
        senha,
        senha2
    ]
    print(data)
    return redirect('login')
     def retornoemail():
        return JsonResponse(email)
    def retornosenha():
        return JsonResponse(senha)
    


def dashboard(request):
    return render(request, 'accounts/dashboard.html')
'''