from django.shortcuts import render
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

def admin_base_code(request):
    query = request.GET.get("query")
    #query=parse.quote(query)
    url="http://34.64.157.240:8000/admin/call/mnt_code/?mnt_code="+query
    json_string=requests.get(url)
    return JsonResponse(json_string.json(),safe=False)

def admin_base_name(request):
    query = request.GET.get("query")
    query=parse.quote(query)
    url="http://34.64.157.240:8000/admin/call/mnt_name/?mnt_name="+query
    json_string=requests.get(url)
    return JsonResponse(json_string.json(),safe=False)
    
def admin_gpx_code(request):
    query = request.GET.get("query")
    #query=parse.quote(query)
    url="http://34.64.157.240:8000/admin/call/mnt_code/?gpx_code="+query
    json_string=requests.get(url)
    return JsonResponse(json_string.json(),safe=False)


def naver_search(request):
    center = request.GET.get("center")
    radians = request.GET.get("radians")
    return 0;

def kakao_search(request):
    
    #restapi key : 828c7f78756be57368162d9d83b3af45
    #query
    #category_group_code
    #x longitude
    #y latitude
    #radius
    
    
    return 0;