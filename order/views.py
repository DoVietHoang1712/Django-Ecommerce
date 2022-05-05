from cmath import e
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from order.serializers import OrderSerializer
from .models import *
from cart.models import CartItem
from django.db import transaction
# Create your views here.
class OrderAPIView(ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        sid = transaction.savepoint()
        try:
            data = request.data
            shipment = Shipment.objects.create(**data['shipment'])
            shipment.save()
            payment = Payment.objects.create(**data['payment'])
            payment.save()
            order = Order.objects.create(payment_id=payment.id,shipment_id=shipment.id,user_id=request.user.id)
            order.save()
            for cart_item in data['cartItem']:
                OrderDetail.objects.create(order_id=order.id, price=cart_item['item']['price'] * cart_item['quantity'], quantity= cart_item['quantity'], item_id = cart_item['item']['id']).save()
            transaction.savepoint_commit(sid)
        except e:
            print(e)
            transaction.savepoint_rollback(sid)
        return Response()

    def list(self, request, *args, **kwargs):
        orders = Order.objects.filter(user=request.user)
        return Response(OrderSerializer(orders, many=True).data)

    def retrieve(self, request, *args, **kwargs):
        orders = Order.objects.get(user=request.user, id=kwargs['pk'])
        return Response(OrderSerializer(orders).data)