from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from .models import PoliticalParty, Candidate, GovernmentPlan

def party_list(request):
    parties = PoliticalParty.objects.all()
    return render(request, 'partidos/party_list.html', {'parties': parties})

def party_detail(request, slug):
    party = get_object_or_404(PoliticalParty, slug=slug)
    return render(request, 'partidos/party_detail.html', {'party': party})

class HomeView(ListView):
    model = PoliticalParty
    template_name = 'partidos/home.html'
    context_object_name = 'political_parties'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

class PartyDetailView(DetailView):
    model = PoliticalParty
    template_name = 'partidos/party_detail.html'
    context_object_name = 'party'
    slug_url_kwarg = 'slug'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        # Obtener candidatos por rol
        candidates = self.object.candidates.all()
        context['president'] = candidates.filter(role='president').first()
        context['vice_presidents'] = candidates.filter(role__in=['first_vice', 'second_vice'])
        
        # Obtener plan de gobierno
        try:
            plan = self.object.government_plan
            context['plan'] = plan
            context['axes'] = plan.axes.all()
            context['proposals'] = plan.proposals.all()
        except GovernmentPlan.DoesNotExist:
            context['plan'] = None
        
        # Obtener hitos históricos
        context['milestones'] = self.object.milestones.all().order_by('year')
        
        return context
