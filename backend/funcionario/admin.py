from django.contrib import admin

from .models import Funcionario, Agencia


class MostraFuncionario(admin.ModelAdmin):
    list_display = ('id', 'nome', 'sobrenome', 'salario', 'comissao', 'idagencia')
    list_display_links = ('id', 'nome', 'sobrenome', 'salario', 'comissao', 'idagencia')
    list_filter = ('id', 'nome', 'sobrenome', 'salario', 'comissao', 'idagencia')
    list_per_page = 15
    search_fields = ('id', 'nome', 'sobrenome', 'salario', 'comissao', 'idagencia')


admin.site.register(Funcionario, MostraFuncionario)