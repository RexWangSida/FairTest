from django.urls import path
from . import views
urlpatterns = [
    path('loginOnHold', views.loginAuth, name='loginOnHold' )
]
