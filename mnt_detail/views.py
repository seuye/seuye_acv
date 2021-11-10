from django.shortcuts import render
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
import requests
import json
from django.http import JsonResponse  


# Create your views here.
def mnt_detail(request):
    json_rq = requests.get("http://34.64.157.240:8000/details/default")
    json_rq = json_rq.text
    json_dict = json.loads(json_rq)
    print(type(json_dict))
    context = {
        "contents": json_dict, 
    }
    return render(request, "mnt_detail/mnt_detail.html", context)

def admin_gpx_code(request):
    query = request.GET.get("query")
    #query=parse.quote(query)
    url="http://34.64.157.240:8000/admin/call/mnt_code/?gpx_code="+query
    json_string=requests.get(url)
    return JsonResponse(json_string.json(),safe=False)

def admin_base_code(request):
    query = request.GET.get("query")
    #query=parse.quote(query)
    url="http://34.64.157.240:8000/admin/call/mnt_code/?mnt_code="+query
    json_string=requests.get(url)
    return JsonResponse(json_string.json(),safe=False)