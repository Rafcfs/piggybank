from imghdr import tests
from django.urls import path
from .views import AccountView

urlpatterns = [ 
    path('', AccountView.as_view())
]
