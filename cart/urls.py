from rest_framework.routers import DefaultRouter
from .views import CartAPIView

router = DefaultRouter()
router.register(r'', CartAPIView, basename='cart_viewset')
urlpatterns = router.urls
# urlpatterns = [
#     path('book/', BookAPIViewSet.list, name="book_list"),
#     path('book/<int:id>', BookAPIViewSet.retrieve, name='book_id'),
# ]