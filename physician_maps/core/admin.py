from django.contrib import admin

# Register your models here.
from core.models import Doctor

# Register your models here.
admin.site.register(Doctor)
admin.site.site_header = 'American Physicians'

