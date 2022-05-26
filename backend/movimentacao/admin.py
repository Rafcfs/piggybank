from webbrowser import Opera
from django.contrib import admin
from .models import Operacao, Movimentacao


class MostraOperacao(admin.ModelAdmin):
    list_display = ('id', 'nome')
    list_display_links = ('id', 'nome')
    list_filter = ('id', 'nome')
    list_per_page = 15
    search_fields = ('id', 'nome')


class MostraMovimentacao(admin.ModelAdmin):
    list_display = ('id', 'conta_origem', 'tipo', 'conta_receber',
                    'valor', 'data_execucao', 'codigo_boleto')
    list_display_links = ('id', 'conta_origem', 'tipo',
                          'conta_receber', 'valor', 'data_execucao', 'codigo_boleto')
    list_filter = ('id', 'conta_origem', 'tipo', 'conta_receber',
                   'valor', 'data_execucao', 'codigo_boleto')
    list_per_page = 15
    search_fields = ('id', 'conta_origem', 'tipo', 'conta_receber',
                     'valor', 'data_execucao', 'codigo_boleto')


admin.site.register(Operacao, MostraOperacao)
admin.site.register(Movimentacao, MostraMovimentacao)
