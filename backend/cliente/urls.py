from django.urls import path
from .views import FisicaView

urlpatterns = [
    path('', FisicaView.as_view()),
]
