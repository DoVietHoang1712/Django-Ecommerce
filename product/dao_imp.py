from product.dao import BookDAO, ClothesDAO, ElectronicDAO, LaptopDAO, ProductDAO
from product.models import Book, ProductItem
from product.serializers import BookSerializer, ProductItemSerializer

class BookDAOImp(BookDAO):
    def get_all(self):
        data = ProductItem.objects.filter(book__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.filter(book__name__contains=name)
        return ProductItemSerializer(data, many = True).data

    def get_by_id(self, id):
        data = ProductItem.objects.get(book__id=id)
        return ProductItemSerializer(data).data

class ClothesDAOImp(ClothesDAO):
    def get_all(self):
        data = ProductItem.objects.filter(clothes__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.filter(clothes__isnull=False).filter(clothes__name__contains=name)
        return ProductItemSerializer(data, many=True).data

    def get_by_id(self, id):
        data = ProductItem.objects.get(clothes__id=id)
        return ProductItemSerializer(data).data

class ElectronicDAOImp(ElectronicDAO):
    def get_all(self):
        data = ProductItem.objects.filter(electronic__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.filter(electronic__isnull=False).filter(electronic__name__contains=name)
        return ProductItemSerializer(data, many=True).data

    def get_by_id(self, id):
        data = ProductItem.objects.get(electronic__id=id)
        return ProductItemSerializer(data).data

class LaptopDAOImp(LaptopDAO):
    def get_all(self):
        data = ProductItem.objects.filter(laptop__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.filter(laptop__isnull=False).filter(electronic__name__contains=name)
        return ProductItemSerializer(data, many=True).data

    def get_by_id(self, id):
        data = ProductItem.objects.get(laptop__id=id)
        return ProductItemSerializer(data).data