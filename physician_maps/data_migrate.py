import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

#imports
import pandas as pd
from core.models import Doctor

