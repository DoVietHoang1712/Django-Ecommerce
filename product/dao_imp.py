from matplotlib.pyplot import title
from product.dao import BookDAO, ClothesDAO, ElectronicDAO, LaptopDAO, ProductDAO
from product.models import ProductItem
from product.serializers import ProductItemSerializer

class BookDAOImp(BookDAO):
    def get_all(self):
        data = ProductItem.objects.exclude(book__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.exclude(book__isnull=False)
        data = data.filter(title=name)
        return ProductItemSerializer(data, many=True).data

class ClothesDAOImp(ClothesDAO):
    def get_all(self):
        data = ProductItem.objects.exclude(clothes__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.exclude(clothes__isnull=False).filter(title=name)
        return ProductItemSerializer(data, many=True).data

class ElectronicDAOImp(ElectronicDAO):
    def get_all(self):
        data = ProductItem.objects.exclude(electronic__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.exclude(electronic__isnull=False).filter(title=name)
        return ProductItemSerializer(data, many=True).data

class LaptopDAOImp(LaptopDAO):
    def get_all(self):
        data = ProductItem.objects.exclude(laptop__isnull=False)
        return ProductItemSerializer(data, many=True).data

    def search_by_name(self, name):
        data = ProductItem.objects.exclude(laptop__isnull=False).filter(title=name)
        return ProductItemSerializer(data, many=True).data