from django.contrib import admin
from .models import Cliente, Pessoa_Fisica, Pessoa_Juridica


class PessoaFisica(admin.ModelAdmin):
    list_display = ('id', 'nome', 'sobrenome', 'fone','cpf')
    list_display_links = ('id', 'nome', 'sobrenome', 'fone','cpf')
    list_filter = ('id', 'nome', 'sobrenome', 'fone','cpf')
    list_per_page = 15
    search_fields = ('id', 'nome', 'sobrenome', 'fone','cpf')

class PessoaJuridica(admin.ModelAdmin):
    list_display = ('id', 'nome', 'sobrenome', 'fone','cnpj')
    list_display_links = ('id', 'nome', 'sobrenome', 'fone','cnpj')
    list_filter = ('id', 'nome', 'sobrenome', 'fone','cnpj')
    list_per_page = 15
    search_fields = ('id', 'nome', 'sobrenome', 'fone','cnpj')


admin.site.register(Pessoa_Fisica, PessoaFisica)
admin.site.register(Pessoa_Juridica, PessoaJuridica)