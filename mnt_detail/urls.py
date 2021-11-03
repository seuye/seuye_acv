from django.urls import path

from mnt_detail import views

urlpatterns = [
    path("mnt_detail/", views.mnt_detail)
    ]