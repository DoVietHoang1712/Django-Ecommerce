from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,template_name='index.html')

def test(request):
    return render(request,template_name='test.html')