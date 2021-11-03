from django.urls import path

from free_board import views


urlpatterns = [
    path("free_write/", views.free_write),
    path("home/", views.home)
    ]
