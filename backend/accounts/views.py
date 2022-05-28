import email
from django.shortcuts import render
from django.core.validators import validate_email


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
    senha = request.POST.get('senha')
    senha2 = request.POST.get('senha2')
    # TODO MENSAGENS
    if not email or not senha or not senha2:
        return render(request, 'accounts/cadastro.html')

    if senha != senha2:
        return render(request, 'accounts/cadastro.html')

    try:
        validate_email(email)
    except:
        return render(request, 'accounts/cadastro.html')

    if len(senha)<6:
        return render(request, 'accounts/cadastro.html')


def dashboard(request):
    return render(request, 'accounts/dashboard.html')
