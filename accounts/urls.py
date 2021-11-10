from django.contrib import admin
from django.urls import path
from accounts import views

app_name = "accounts"
urlpatterns = [
    path("sign-up/", views.sign_up, name="sign-up"),
    path("login/", views.login, name="login"),
	path("logout/", views.logout, name="logout"),
]