from imghdr import tests
from django.urls import path
from .views import AccountView, csrf
from . import views

urlpatterns = [
    path('', AccountView.as_view()),
    path('csrf/', views.csrf),
    path('ping/', views.ping)
]
