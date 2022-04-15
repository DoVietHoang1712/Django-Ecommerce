# from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from .dao_imp import BookDAOImp, ClothesDAOImp, ElectronicDAOImp, LaptopDAOImp
# Create your views here.

class BookAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self,request, *args, **kwargs):
        dao = BookDAOImp()
        name = request.query_params.get('name', None)
        if name:
            data = dao.search_by_name(name)
            print(data)
            return Response(data)
        return Response(dao.get_all())
    
    def retrieve(self,request, *args, **kwargs):
        dao = BookDAOImp()
        data = dao.get_by_id(kwargs['pk'])
        print(data)
        return Response(data)

class LaptopAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        dao = LaptopDAOImp()
        name = request.query_params.get('name', None)
        if name:
            return Response(dao.search_by_name(name))
        return Response(dao.get_all())

    def retrieve(self, request, *args, **kwargs):
        dao = LaptopDAOImp()
        return Response(dao.get_by_id(kwargs['pk']))

class ElectronicAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        dao = ElectronicDAOImp()
        name = request.query_params.get('name', None)
        if name:
            return Response(dao.search_by_name(name))
        return Response(dao.get_all())

    def retrieve(self, request, *args, **kwargs):
        dao = ElectronicDAOImp()
        return Response(dao.get_by_id(kwargs['pk']))

class ClothesAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        dao = ClothesDAOImp()
        name = request.query_params.get('name', None)
        if name:
            return Response(dao.search_by_name(name))
        return Response(dao.get_all())

    def retrieve(self, request, *args, **kwargs):
        dao = ClothesDAOImp()
        return Response(dao.get_by_id(kwargs['pk']))