from django.db import models
from django.contrib.auth import get_user_model

from product.models import ProductItem

# Create your models here.
class Cart(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)

class CartItem(models.Model):
    quantity = models.IntegerField()
    item = models.ForeignKey(ProductItem, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)