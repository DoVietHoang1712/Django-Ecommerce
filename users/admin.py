from django.contrib import admin

from users.models import Address, Customer, Fullname

# Register your models here.
admin.site.register(Address)
admin.site.register(Fullname)
admin.site.register(Customer)