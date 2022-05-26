from django.contrib import admin
from .models import CartaoCredito, Fatura


class MostraCartao(admin.ModelAdmin):
    list_display = ('id', 'numero', 'validade', 'cvv', 'bandeira', 'saldo','limite','conta')
    list_display_links = ('id', 'numero', 'validade', 'cvv', 'bandeira', 'saldo','limite','conta')
    list_filter = ('id', 'numero', 'validade', 'cvv', 'bandeira', 'saldo','limite','conta')
    list_per_page = 15
    search_fields = ('id', 'numero', 'validade', 'cvv', 'bandeira', 'saldo','limite','conta')

class MostraFatura(admin.ModelAdmin):
    list_display = ('id', 'valor', 'vencimento', 'jurus', 'status')
    list_display_links = ('id', 'valor', 'vencimento', 'jurus', 'status')
    list_filter = ('id', 'valor', 'vencimento', 'jurus', 'status')
    list_per_page = 15
    search_fields = ('id', 'valor', 'vencimento', 'jurus', 'status')


admin.site.register(CartaoCredito, MostraCartao)
admin.site.register(Fatura, MostraFatura)