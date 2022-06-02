from django.contrib import admin
from .models import Conta


class MostraConta(admin.ModelAdmin):
    list_display = ('numero', 'saldo', 'tipo', 'idagencia', 'idcliente')
    list_display_links = ('numero', 'saldo',
                          'tipo', 'idagencia', 'idcliente')
    list_filter = ('numero', 'saldo', 'tipo', 'idagencia', 'idcliente')
    list_per_page = 15
    search_fields = ('numero', 'saldo', 'tipo', 'idagencia', 'idcliente')


admin.site.register(Conta, MostraConta)
