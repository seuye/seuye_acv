from django.contrib import admin
from django.urls import path
from free_board import views


urlpatterns = [
    path('write/', views.free_post_write),
    path('home/', views.home),
    path('post-view/<int:post_id>/', views.free_post_view),
    path('post-edit/<int:post_id>/', views.free_post_update),
    path('post-delete/<int:post_id>/', views.free_post_delete),
    ]
