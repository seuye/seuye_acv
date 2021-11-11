from django.http import request
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from accounts.models import UserInfo

# Create your views here.

def sign_up(request):
    context = {}
    if request.method == 'POST':
        if(request.POST.get('username') and
                request.POST.get('password') and
                request.POST.get('password') == request.POST.get('password_check')):
            new_user = User.objects.create_user(
                first_name=request.POST.get('firstname'),
                username=request.POST.get('username'),
                password=request.POST.get('password'),                
            )

            new_user_info = UserInfo()
            new_user_info.phone_number = request.POST.get("phone_number")
            new_user_info.user = new_user
            new_user_info.save()

            auth.login(request, new_user)
            return redirect('accounts:login')
            #예슬이 페이지 링크 홈이라고 했는지 확인해야함#
        else:
            context['error'] = '정보가 맞지 않습니다.'

    return render(request, "accounts/login.html")

def login(request):
    context = {}
    if request.method == "POST":
        if request.POST.get("username") and request.POST.get("password"):
            user = auth.authenticate(
                request,
                username=request.POST.get("username"),
                password=request.POST.get("password"),
            )

            if user is not None:
                auth.login(request, user)
                return redirect("accounts:login")
                #예슬이 페이지 링크 홈이라고 했는지 확인해야함?#
            else:
                context["error"] = "아이디와 비밀번호를 다시 확인해주세요."
        else:
            context["error"] = "아이디와 비밀번호를 다시 확인해주세요."

    return render(request, "accounts/login.html", context)

def logout(request):
    if request.method == "POST":
        auth.logout(request)
    
    return redirect("accounts:login")
