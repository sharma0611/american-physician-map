from django.db import models

# Create your models here.

class Doctor(models.Model):
    name = models.CharField("Name", max_length=200)
    address = models.CharField("Address", max_length=200) #, unique=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True, default=None)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True,null=True, default=None)


