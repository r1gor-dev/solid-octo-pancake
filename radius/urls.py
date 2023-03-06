from rest_framework import routers
from .api import radiusViewSet

router = routers.DefaultRouter()
router.register('api/radius', radiusViewSet, 'radius')


urlpatterns = router.urls
