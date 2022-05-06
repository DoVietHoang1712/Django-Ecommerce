from rest_framework import serializers

from order.models import Order, OrderDetail, Payment, Rating, Shipment
from product.serializers import ProductItemSerializer

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

class OrderDetailSerializer(serializers.ModelSerializer):
    rating = RatingSerializer()
    item = ProductItemSerializer()
    class Meta:
        model = OrderDetail
        fields = '__all__'

class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):

    shipment = ShipmentSerializer()
    payment = PaymentSerializer()
    order_details = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = '__all__'

    def get_order_details(self, obj):
        details = OrderDetail.objects.filter(order=obj)
        return OrderDetailSerializer(details, many=True).data