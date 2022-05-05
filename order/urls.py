from rest_framework.routers import DefaultRouter
from .views import OrderAPIView

router = DefaultRouter()
router.register(r'', OrderAPIView, basename='order_viewset')
urlpatterns = router.urls