from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    re_path(r'^account',views.account, name='account'),
    re_path(r'^testroom', views.testroom, name="testroom")
]
