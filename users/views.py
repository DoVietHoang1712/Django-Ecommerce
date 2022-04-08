from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response

from users.dao import UserDAOImp
from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.permissions import IsAuthenticated

from users.serializers import UserSerializer
# Create your views here.
def index(request):
    return render(request,template_name='index.html')

def test(request):
    return render(request,template_name='test.html')

@authentication_classes([IsAuthenticated])
@api_view(['GET'])
def me(request, *args, **kwargs):
    dao = UserDAOImp()
    return Response(dao.get_user_information(request.user))