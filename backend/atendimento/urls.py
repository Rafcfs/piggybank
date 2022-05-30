from django.urls import path
from .views import AtendimentoView

urlpatterns = [
    path('', AtendimentoView.as_view())
]
