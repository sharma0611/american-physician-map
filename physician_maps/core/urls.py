from . import views

from django.urls import path

urlpatterns = [
        path('', views.mapsearch, name='mapsearch'),
        path('doctorsearch', views.doctorsearch, name='doctorsearch'),
        ]

