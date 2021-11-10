from django.shortcuts import render
from django.http import HttpResponseRedirect
from free_board.models import Post


def home(request):
    post_list = Post.objects.all().order_by('-pk')
    context = {
        'post_list': post_list
    }
    return render(request, "free_board/home.html", context)

def free_post_write(request):
    # print(request.user)
    if request.method == 'GET':
        return render(request, 'free_board/create.html')
    elif request.method == 'POST':
        new_post = Post()
        new_post.title = request.POST['title']
        new_post.body = request.POST['content']
        new_post.save()
        return HttpResponseRedirect("/free_board/home")

def free_post_view(request, post_id):
    post = Post.objects.get(pk=post_id)
    context = {
        "post" : post
    }
        
    return render(request, 'free_board/post-view.html', context)

def free_post_update(request, post_id):
    if request.method == 'GET':
        post = Post.objects.get(pk=post_id)
        context = {
            'post': post
        }
        return render(request, 'free_board/edit.html', context)
    elif request.method == 'POST':
        post = Post.objects.get(pk=post_id)
        post.title = request.POST['title']
        post.body = request.POST['content']
        post.save()
        return HttpResponseRedirect('/free_board/home/')

def free_post_delete(request, post_id):
    target_post = Post.objects.get(pk=post_id)
    target_post.delete()
    return HttpResponseRedirect("/free_board/home/")

