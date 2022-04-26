from rest_framework.serializers import ModelSerializer
from product.serializers import ProductItemSerializer
from .models import CartItem

class CartItemSerializer(ModelSerializer):
    item = ProductItemSerializer()
    class Meta:
        model = CartItem
        fields = ('id', 'item', 'quantity')