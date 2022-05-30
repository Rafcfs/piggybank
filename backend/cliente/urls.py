from django.urls import path
from .views import FisicaView, JuridicaView

urlpatterns = [
    path('fisica', FisicaView.as_view()),
    path('juridica', JuridicaView.as_view()),

]
