from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class Address(models.Model):
    city = models.TextField(max_length=255)
    district = models.TextField(max_length=255)
    ward = models.TextField(max_length=255)
    details = models.TextField(max_length=255)

class Fullname(models.Model):
    firstname = models.TextField(max_length=255)
    lastname = models.TextField(max_length=255)

class Customer(models.Model):
    account = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    dob = models.DateField()
    address = models.ForeignKey(Address, on_delete=models.CASCADE)