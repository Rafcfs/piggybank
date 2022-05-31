from django.urls import path
from .views import EmprestimoView

urlpatterns = [
    path('', EmprestimoView.as_view())
]
