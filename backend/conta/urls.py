from django.urls import path
from . import views

urlpatterns = [
    path('', views.ContaView.as_view()),
]
