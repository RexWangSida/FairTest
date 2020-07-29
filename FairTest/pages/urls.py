from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('account/<str:name>/<str:uid>', views.account, name='account'),
    path('testroom/<str:name>/<str:uid>', views.testroom, name="testroom"),
    re_path(r'^getTest', views.getTest, name="test"),
    re_path(r'^updateTest', views.updateTest, name="updateTest")
]
