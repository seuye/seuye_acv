from django.shortcuts import render

# Create your views here.

def search_results(request):
    return render(request, "search_results/search_results.html")