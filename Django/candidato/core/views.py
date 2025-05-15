from django.shortcuts import render
from partidos.models import PoliticalParty

def home(request):
    political_parties = PoliticalParty.objects.all()
    context = {
        'political_parties': political_parties,
    }
    return render(request, 'core/home.html', context)

def about(request):
    return render(request, 'core/about.html')

def contact(request):
    return render(request, 'core/contact.html')
