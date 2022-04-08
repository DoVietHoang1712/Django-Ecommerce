from django.contrib import admin

from product.models import Book, Clothes, Electronic, Laptop, ProductItem

# Register your models here.
admin.site.register(Book)
admin.site.register(Laptop)
admin.site.register(Clothes)
admin.site.register(Electronic)
admin.site.register(ProductItem)