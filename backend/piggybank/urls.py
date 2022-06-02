"""piggybank URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cadastro/', include('accounts.urls')),
    path('pessoa/', include('cliente.urls')),
    path('agencia/', include('agencia.urls')),
    path('conta/', include('conta.urls')),
    path('emprestimo/', include('emprestimo.urls')),
    path('suporte/', include('atendimento.urls')),
    path('cartao/', include('cartao.urls')),
    path('csrf/', views.csrf),
    path('ping/', views.ping),


    path('__debug__/', include('debug_toolbar.urls'))
]
