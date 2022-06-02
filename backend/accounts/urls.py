from django.urls import path
from .views import AccountView, LoginView

urlpatterns = [
    path('', AccountView.as_view()),
]
