from rest_framework import serializers
from .models import radius


class radiusSerializer(serializers.ModelSerializer):
    class Meta:
        model = radius
        fields = '__all__'
