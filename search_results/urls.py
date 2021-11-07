from django.urls import path

from search_results import views


urlpatterns = [
    path("search_results/", views.search_results)
    ]