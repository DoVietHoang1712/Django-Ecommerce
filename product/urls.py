from rest_framework.routers import DefaultRouter

from product.views import BookAPIViewSet, ClothesAPIViewSet, ElectronicAPIViewSet, LaptopAPIViewSet

router = DefaultRouter()
router.register(r'book', BookAPIViewSet, basename='book_viewset')
router.register(r'clothes', ClothesAPIViewSet, basename='clothes_viewset')
router.register(r'laptop', LaptopAPIViewSet, basename='laptop_viewset')
router.register(r'electronic', ElectronicAPIViewSet, basename='electronic_viewset')
urlpatterns = router.urls