from django.urls import path

from mnt_detail import views

urlpatterns = [
    path("mnt_detail/", views.mnt_detail),
    path("gpx-code/", views.admin_gpx_code),
    path("api-call/", views.admin_base_code)
    ]