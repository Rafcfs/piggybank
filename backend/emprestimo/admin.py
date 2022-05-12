from django.contrib import admin
from .models import Conta, Agencia, Emprestimo


class MostraEmprestimo(admin.ModelAdmin):
    list_display = ('id', 'valor', 'data_aplicacao', 'idagencia', 'idconta')
    list_display_links = ('id', 'valor', 'data_aplicacao', 'idagencia', 'idconta')
    list_filter = ('id', 'valor', 'data_aplicacao', 'idagencia', 'idconta')
    list_per_page = 15
    search_fields = ('id', 'valor', 'data_aplicacao', 'idagencia', 'idconta')


admin.site.register(Emprestimo, MostraEmprestimo)
