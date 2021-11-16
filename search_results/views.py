import json
from django.shortcuts import render
import requests

# Create your views here.

# def search_results(request):
#     return render(request, "search_results/search_results.html")


def search_results(request):
    query = request.GET.get("query")
    url="http://34.64.157.240:8000/search/?query="+query+"&page=1&limits=10"
    json_rq = requests.get(url)
    json_rq = json_rq.text
    json_dict = json.loads(json_rq)
    print(type(json_dict))
    context = {
        "contents": json_dict, 
    }
    return render(request, "search_results/search_results.html", context)