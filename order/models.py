
from django.db import models
from product.models import ProductItem
from django.contrib.auth import get_user_model
# Create your models here.

class Shipment(models.Model):

    class _StatusChoice(models.TextChoices):
        PREPARING = 'PREPARING', 'PREPARING'
        DELIVERYING = 'DELIVERYING', 'DELIVERYING'
        DONE = 'DONE', 'DONE'

    fee = models.FloatField()
    weight = models.CharField(max_length=50)
    address = models.TextField()
    status = models.CharField(
        max_length=50,
        choices=_StatusChoice.choices,
        default=_StatusChoice.PREPARING
    )
    note = models.TextField()
    phone = models.TextField()

class Payment(models.Model):
    pay_at = models.DateTimeField(null=True)
    total = models.FloatField()
    name = models.TextField()
    card_number = models.TextField(null=True)
    ccv = models.CharField(max_length=3, null=True)

    def __str__(self) -> str:
        return str(self.id)

class Order(models.Model):
    create_at = models.DateTimeField(auto_now_add=True)
    shipment = models.OneToOneField(Shipment, on_delete=models.CASCADE)
    payment = models.OneToOneField(Payment, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True)

class Rating(models.Model):
    star = models.IntegerField()
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)

class OrderDetail(models.Model):
    rating = models.OneToOneField(Rating, null=True, on_delete=models.CASCADE)
    item = models.ForeignKey(ProductItem, on_delete=models.CASCADE,)
    quantity = models.IntegerField(default=1)
    price = models.FloatField(default=0.0)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)