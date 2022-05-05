from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Order)
admin.site.register(Shipment)
admin.site.register(Payment)
admin.site.register(Rating)
admin.site.register(OrderDetail)