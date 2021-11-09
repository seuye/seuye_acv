from django.urls import path
from db_manager import views
from urllib import parse


app_name = 'db_manager' 

urlpatterns = [
    path("main/", views.admin_main),
    path("api-call/", views.admin_api)
    ]
