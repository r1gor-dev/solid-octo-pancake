from .models import radius
from rest_framework import viewsets, permissions
from .serializers import radiusSerializer


class radiusViewSet(viewsets.ModelViewSet):
    queryset = radius.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = radiusSerializer
