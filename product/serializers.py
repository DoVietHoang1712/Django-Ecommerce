from rest_framework import serializers

from product.models import Book, Clothes, Laptop, ProductItem, Electronic

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class ElectronicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Electronic
        fields = '__all__'

class ClothesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clothes
        fields = '__all__'

class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = '__all__'

class ProductItemSerializer(serializers.ModelSerializer):
    book = BookSerializer()
    electronic = ElectronicSerializer()
    clothes = ClothesSerializer()
    laptop = LaptopSerializer()
    
    class Meta:
        model = ProductItem
        fields = '__all__'