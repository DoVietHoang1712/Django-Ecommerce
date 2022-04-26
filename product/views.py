
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.response import Response

from product.models import ProductItem
from product.serializers import ProductItemSerializer
# Create your views here.

class BookAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self,request, *args, **kwargs):
        name = request.query_params.get('name', None)
        if name:
            data = ProductItem.objects.filter(book__name__contains=name)
            return Response(ProductItemSerializer(data, many = True).data)
        data = ProductItem.objects.filter(book__isnull=False)
        return Response(ProductItemSerializer(data, many=True).data)
    
    def retrieve(self,request, *args, **kwargs):
        data = ProductItem.objects.get(book__id=kwargs['pk'])
        return Response(ProductItemSerializer(data).data)

class LaptopAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        name = request.query_params.get('name', None)
        if name:
            data = ProductItem.objects.filter(laptop__isnull=False).filter(electronic__name__contains=name)
            return Response(ProductItemSerializer(data, many=True).data)

        data = ProductItem.objects.filter(laptop__isnull=False)
        return Response(ProductItemSerializer(data, many=True).data)

    def retrieve(self, request, *args, **kwargs):
        data = ProductItem.objects.get(laptop__id=kwargs['pk'])
        return Response(ProductItemSerializer(data).data)

class ElectronicAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        name = request.query_params.get('name', None)
        if name:
            data = ProductItem.objects.filter(electronic__isnull=False).filter(electronic__name__contains=name)
            return Response(ProductItemSerializer(data, many=True).data)

        data = ProductItem.objects.filter(electronic__isnull=False)
        return Response(ProductItemSerializer(data, many=True).data)

    def retrieve(self, request, *args, **kwargs):
        data = ProductItem.objects.get(electronic__id=kwargs['pk'])
        return Response(ProductItemSerializer(data).data)

class ClothesAPIViewSet(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        name = request.query_params.get('name', None)
        if name:
            data = ProductItem.objects.filter(clothes__isnull=False).filter(clothes__name__contains=name)
            return Response(ProductItemSerializer(data, many=True).data)
        data = ProductItem.objects.filter(clothes__isnull=False)
        return Response(ProductItemSerializer(data, many=True).data)

    def retrieve(self, request, *args, **kwargs):
        data = ProductItem.objects.get(clothes__id=kwargs['pk'])
        return Response(ProductItemSerializer(data).data)