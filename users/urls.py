from django.urls import path, include
from .views import index, test, me

urlpatterns = [
    path('',index),
    path('test/', test),
    path('me/',me)
]