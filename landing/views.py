from django.shortcuts import render
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
import requests

# Create your views here.
def index(request):
    return render(request, "landing/index.html")

def landing(request):
    return render(request, "landing/landing.html")

from landing.models import Post

def landing_post_write(request):
    if request.method == "POST":
        new_post = Post()
        new_post.title = request.POST["title"]
        new_post.content = request.POST["content"]
        if request.FILES["image"]:
            new_post.head_image = request.FILES["image"]
        new_post.likes = 0
        new_post.save()
        return HttpResponseRedirect(reverse("landing:index"))
