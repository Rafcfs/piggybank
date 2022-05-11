from django.contrib import admin
from .models import Conta


class MostraConta(admin.ModelAdmin):
    list_display = ('id', 'numero', 'saldo', 'tipo', 'idagencia', 'idcliente')
    list_display_links = ('id', 'numero', 'saldo',
                          'tipo', 'idagencia', 'idcliente')
    list_filter = ('id', 'numero', 'saldo', 'tipo', 'idagencia', 'idcliente')
    list_per_page = 15
    search_fields = ('id', 'numero', 'saldo', 'tipo', 'idagencia', 'idcliente')


admin.site.register(Conta, MostraConta)
