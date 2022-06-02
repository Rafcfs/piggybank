from django.urls import path
from .views import MovimentacaoView

urlpatterns = [
    path('', MovimentacaoView.as_view()),
]
