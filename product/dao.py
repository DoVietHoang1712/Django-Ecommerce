from product.models import ProductItem
from .serializers import ProductItemSerializer

class ProductDAO:
    def get_all(self):
        pass
    
    def get_by_id(self, id):
        data = ProductItem.objects.get(id=id)
        return ProductItemSerializer(data).data

    def search_by_name(self, name):
        pass


class BookDAO(ProductDAO):
    def get_by_author(self, author):
        pass

class ClothesDAO(ProductDAO):
    def get_by_gender(self,gender):
        pass

class ElectronicDAO(ProductDAO):
    def get_by_manufacture(self, manufacture):
        pass

class LaptopDAO(ProductDAO):
    def get_by_ram(self, ram):
        pass

    def get_by_cpu(self, cpu):
        pass