from django.shortcuts import render
from core.models import Doctor
from django.http import JsonResponse

# Create your views here.
def mapsearch(request):
    return render(request, 'index.html')


def doctorsearch(request):
    query = request.GET.get('query')
    #this view is designed to serve as an api to grab longitude and latitude from a doctor model id
    doctors = Doctor.objects.filter(name__istartswith= query)
    chosen_doc = doctors[0]
    lat, lng = chosen_doc.get_coordinates()
    data = {'latitude': lat, 'longitude': lng}
    return JsonResponse(data)



