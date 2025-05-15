from django.contrib import admin
from .models import (
    PoliticalParty, 
    Candidate, 
    GovernmentPlan, 
    PlanAxis, 
    PlanProposal, 
    HistoricalMilestone
)

class CandidateInline(admin.TabularInline):
    model = Candidate
    extra = 1

class PlanAxisInline(admin.TabularInline):
    model = PlanAxis
    extra = 1

class PlanProposalInline(admin.TabularInline):
    model = PlanProposal
    extra = 1

class HistoricalMilestoneInline(admin.TabularInline):
    model = HistoricalMilestone
    extra = 1

@admin.register(GovernmentPlan)
class GovernmentPlanAdmin(admin.ModelAdmin):
    inlines = [PlanAxisInline, PlanProposalInline]
    list_display = ['party']

@admin.register(PoliticalParty)
class PoliticalPartyAdmin(admin.ModelAdmin):
    list_display = ['name', 'foundation_year', 'ideology']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [CandidateInline, HistoricalMilestoneInline]

@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'party']
    list_filter = ['party', 'role']

@admin.register(HistoricalMilestone)
class HistoricalMilestoneAdmin(admin.ModelAdmin):
    list_display = ['year', 'title', 'party']
    list_filter = ['party']
