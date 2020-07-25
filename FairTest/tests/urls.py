from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path(r'^face', FairTest_FaceR.Contro2_change, name="face"),
]
