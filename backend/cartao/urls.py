from django.urls import path
from .views import CartaoView

urlpatterns = [
    path('', CartaoView.as_view()),
]
