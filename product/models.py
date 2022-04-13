from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.TextField(max_length=255)
    weight = models.TextField(max_length=255)
    details = models.TextField(max_length=5000)

    class Meta:
        abstract = True

class Book(Product):
    publicationYear = models.IntegerField()
    author = models.TextField(max_length=255)
    publisher = models.TextField(max_length=255)

class Electronic(Product):
    manufacture = models.TextField(max_length=255)
    lifespan = models.TextField(max_length=255)

class Clothes(Product):
    sex = models.TextField(max_length=10)
    designer = models.TextField(max_length=255)

class Laptop(Product):
    ram = models.TextField(max_length=10)
    cpu = models.TextField(max_length=100)
    type = models.TextField(max_length=100)

class ProductItem(models.Model):
    image = models.TextField(max_length=10000)
    description = models.TextField(max_length=10000)
    price = models.FloatField()
    title = models.TextField(max_length=200, default="")
    book = models.OneToOneField(Book, on_delete=models.CASCADE, null=True)
    electronic = models.OneToOneField(Electronic, on_delete=models.CASCADE, null=True)
    clothes = models.OneToOneField(Clothes, on_delete=models.CASCADE, null=True)
    laptop = models.OneToOneField(Laptop, on_delete=models.CASCADE, null=True)