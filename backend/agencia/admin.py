from django.contrib import admin
from .models import Agencia


class Agência(admin.ModelAdmin):
    list_display = ('id', 'nome', 'telefone', 'numero')
    list_display_links = ('id', 'nome', 'telefone', 'numero')
    list_filter = ('id', 'nome', 'telefone', 'numero')
    list_per_page = 15
    search_fields = ('id', 'nome', 'telefone', 'numero')


admin.site.register(Agencia, Agência)
