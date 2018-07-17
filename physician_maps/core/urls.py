from . import views

from django.urls import path

urlpatterns = [
        path('', views.mapsearch, name='mapsearch'),
        path('doctorsearch', views.doctorsearch, name='doctorsearch'),
        path('get_doctors', views.get_doctors, name='get_doctors')
        ]

