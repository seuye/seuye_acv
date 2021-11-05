from django.urls import path
from db_manager import views

urlpatterns = [
    path("main/", views.admin_main)
    ]