# from rest_framework.decorators import permission_classes, authentication_classes, api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response
from .dao_imp import BookDAOImp, ClothesDAOImp, ElectronicDAOImp, LaptopDAOImp
# Create your views here.

class BookAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        dao = BookDAOImp()
        name = request.query_params.get('name', None)
        if name:
            return Response(dao.search_by_name(name))
        return Response(dao.get_all())

    def retrieve(self, request, *args, **kwargs):
        dao = BookDAOImp()
        return Response(dao.get_by_id(kwargs['id']))

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
        return Response(dao.get_by_id(kwargs['id']))

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
        return Response(dao.get_by_id(kwargs['id']))

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
        return Response(dao.get_by_id(kwargs['id']))