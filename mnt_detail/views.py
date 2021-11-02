from django.shortcuts import render
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
import requests


# Create your views here.
def mnt_detail(request):
    return render(request, "mnt_detail/mnt_detail.html")