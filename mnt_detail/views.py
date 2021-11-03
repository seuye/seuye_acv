from django.shortcuts import render
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
import requests
import json


# Create your views here.
def mnt_detail(request):
    json_rq = requests.get("http://34.64.157.240:8000/details/default")
    json_rq = json_rq.text
    json_dict = json.loads(json_rq)
    print(type(json_dict))
    context = {
        "contents": json_dict,
        "test": {
            "test2":"test"
        }
    }
    return render(request, "mnt_detail/mnt_detail.html", context)