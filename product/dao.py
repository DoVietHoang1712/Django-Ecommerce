from product.models import Book, ProductItem
from .serializers import BookSerializer, ProductItemSerializer

class ProductDAO:

    def get_by_id(self):
        pass

    def get_all(self):
        pass

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