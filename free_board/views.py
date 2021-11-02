from django.shortcuts import render
from django.http import HttpResponseRedirect
from free_board.models import Post

# Create your views here.

def free_write(request) :
    if request.method == 'GET':
        return remder(request, 'write.html')
    elif request.method == 'POST':
     new_post = Post()
     new_post.title = request.POST["title"]
     new_post.content = request.POST['content']
     new_post.save()
     return HttpResponseRedirect("free_board/home")