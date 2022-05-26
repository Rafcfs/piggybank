from django.contrib import admin

from atendimento.models import Atendimento


class MostraAtendimento(admin.ModelAdmin):
    list_display = ('id', 'data', 'hora', 'servico', 'descricao', 'idfuncionario', 'idcliente')
    list_display_links = ('id', 'data', 'hora', 'servico',
                          'descricao',  'idfuncionario', 'idcliente')
    list_filter = ('id', 'data', 'hora', 'servico', 'descricao', 'idfuncionario', 'idcliente')
    list_per_page = 15
    search_fields = ('id', 'data', 'hora', 'servico',
                     'descricao',  'idfuncionario', 'idcliente')


admin.site.register(Atendimento, MostraAtendimento)
