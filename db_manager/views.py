from django.shortcuts import render
from django.core import serializers 
from django.http import JsonResponse, response
import json
from urllib import parse
import requests
# Create your views here.


#### 기능 요약
#### 현재 mnt에 따라 값 출력 및 수정 (update 관련)
#### 
#### 

def admin_main(request,id=0):
    if id==0:
        print("null")
    else:
        print("null")

    context={
    }

    return render(request,"db_manager/db_manage_main.html",context)


def admin_api(request):
    query = request.GET.get("query")
    query=parse.quote(query)
    url="http://34.64.157.240:8000/api-call/?query_string="+query
    json_string=requests.get(url)
    return JsonResponse(json_string.json(),safe=False)


