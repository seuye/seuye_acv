import json
from django.shortcuts import render
import requests

# Create your views here.

# def search_results(request):
#     return render(request, "search_results/search_results.html")


#js -> view(django-> json)

def search_results(request):
    query = request.GET.get("query")
    page=request.GET.get("page")
    if page==None:
        page=1
    url="http://34.64.157.240:8000/search/"
    prms={
        "query":query,
        "page":page
    }
    json_rq = requests.get(url,params=prms)
    json_rq = json_rq.text
    json_dict = json.loads(json_rq)
    print(json_dict)
    context = {
        "contents": json_dict,
    }
    return render(request, "search_results/search_results.html", context)