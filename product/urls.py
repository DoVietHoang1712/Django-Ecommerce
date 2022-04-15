from rest_framework.routers import DefaultRouter
from django.urls import path
from product.views import BookAPIViewSet, ClothesAPIViewSet, ElectronicAPIViewSet, LaptopAPIViewSet

router = DefaultRouter()
router.register(r'book', BookAPIViewSet, basename='book_viewset')
router.register(r'clothes', ClothesAPIViewSet, basename='clothes_viewset')
router.register(r'laptop', LaptopAPIViewSet, basename='laptop_viewset')
router.register(r'electronic', ElectronicAPIViewSet, basename='electronic_viewset')
urlpatterns = router.urls
# urlpatterns = [
#     path('book/', BookAPIViewSet.list, name="book_list"),
#     path('book/<int:id>', BookAPIViewSet.retrieve, name='book_id'),
# ]