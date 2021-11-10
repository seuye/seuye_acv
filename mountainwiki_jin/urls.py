"""mountainwiki_jin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

import db_manager

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path("admin_db/", include('db_manager.urls'), name='db_manager'),
    path('accounts/', include('allauth.urls')),
    path("free_board/", include('free_board.urls')),
    path("detail/", include("mnt_detail.urls")),
    path("", include("landing.urls")),
    path("", include("search_results.urls")),
=======
    path("free_board/", include('free_board.urls')),
    path('accounts/', include('accounts.urls')),
>>>>>>> aa63765a40cfd54610cc5a72dfbfea0c12780f34

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
