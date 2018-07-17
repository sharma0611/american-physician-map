from django.shortcuts import render

# Create your views here.
def mapsearch(request):
    return render(request, 'index.html')


def doctorsearch(request):
    #this view is designed to serve as an api to grab longitude and latitude from a doctor model id
    return

