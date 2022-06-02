from imghdr import tests
from django.urls import path
from .views import AccountView, LoginView

urlpatterns = [
    path('', AccountView.as_view()),
    path('login/', LoginView.as_view())

]
