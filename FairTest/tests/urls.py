from django.urls import path, re_path
from . import FairTest_FaceR
from . import views

urlpatterns = [
    re_path(r'^face', FairTest_FaceR.Contro2_change, name="face"),

    re_path(r'^updateTest', views.updateTest, name="updateTest"),

    re_path(r'^getTest', views.getTest, name="test"),
]
