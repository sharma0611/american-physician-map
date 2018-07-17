from django.db import models
from django.conf import settings
import googlemaps
gmaps = googlemaps.Client(key=settings.GMAPS_KEY)

# Model helper functions

def get_latitude_longitude(address, zipcode):
    geocode_result = gmaps.geocode(address, components={'postal_code': zipcode, 'country': 'US'})
    lat = geocode_result[0]['geometry']['location']['lat']
    lng = geocode_result[0]['geometry']['location']['lng']
    return lat, lng

# Create your models here.
class Doctor(models.Model):
    name = models.CharField("Name", max_length=150)
    address = models.CharField("Address", max_length=200) #, unique=True)
    specialty = models.CharField("Speciality", max_length=50, default="")
    prefix = models.CharField("Prefix", max_length=10, default="")
    zipcode = models.CharField("Zipcode", max_length=20, default="")
    latitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True, default=None)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True,null=True, default=None)

    def get_coordinates(self):
        lat = self.latitude
        lng = self.longitude
        if lat and lng:
            return (lat, lng)
        else:
            try:
                lat, lng = get_latitude_longitude(self.address, self.zipcode)
            except:
                lat, lng = (None, None)
            self.latitude = lat
            self.longitude = lng
            self.save()
            return lat, lng

