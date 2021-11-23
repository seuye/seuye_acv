from django.urls import path

from mnt_detail import views

urlpatterns = [
    path("mnt_detail/", views.mnt_detail_default),
    # path("mnt_detail/", views.mnt_detail),
    path("mnt_detail/<str:major_mnt_code>/", views.mnt_detail),
    path("gpx-code/", views.admin_gpx_code),
    ]


    