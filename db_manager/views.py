from django.shortcuts import render

# Create your views here.


#### 기능 요약
#### 현재 mnt에 따라 값 출력 및 수정 (update 관련)
#### 
#### 





def admin_main(request):
    context={

    }

    return render(request,"db_manager/db_manage_main.html",context)