from django.urls import path

from landing import views


urlpatterns = [
    path("index/", views.index),
    path("landing/", views.landing)
    ]
