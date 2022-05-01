from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action

from cart.models import Cart, CartItem
from cart.serializers import CartItemSerializer
from product.models import ProductItem
# Create your views here.
class CartAPIView(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
        cart, is_created_cart = Cart.objects.get_or_create(user=request.user)
        if is_created_cart:
            return Response(data=[])
        items = CartItem.objects.filter(cart=cart)
        return Response(CartItemSerializer(items, many=True).data)

    def update(self, request, *args, **kwargs):
        cart, is_created_cart = Cart.objects.get_or_create(user=request.user)
        if is_created_cart:
            return Response()
        item = CartItem.objects.get(id=kwargs['pk'], cart=cart)
        item.quantity = request.data['quantity']
        item.save()
        return Response()

    @action(detail=False,methods=['post'], permission_classes = [permissions.IsAuthenticated])
    def add_to_cart(self,request,*args,**kwargs):
        data = request.data
        item=ProductItem.objects.get(id=data['id'])
        quantity = data['quantity']
        user = request.user
        cart, is_created_cart = Cart.objects.get_or_create(user=user)
        if is_created_cart:
            cart.save()
        try:
            cart_item = CartItem.objects.get(cart=cart, item=item)
            cart_item.quantity = cart_item.quantity + quantity
            cart_item.save()
        except:
            CartItem.objects.create(cart=cart, item=item, quantity = quantity).save()
        return Response(status=200)