from django.db import models
from django.urls import reverse
from django.utils.text import slugify

class PoliticalParty(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    logo = models.ImageField(upload_to='parties/logos/')
    color = models.CharField(max_length=20, default='#2563EB')
    description = models.TextField()
    foundation_year = models.IntegerField()
    ideology = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = 'Partido Político'
        verbose_name_plural = 'Partidos Políticos'
        ordering = ['name']
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('partidos:detail', args=[self.slug])
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Candidate(models.Model):
    ROLE_CHOICES = [
        ('president', 'Candidato a la Presidencia'),
        ('first_vice', 'Primera Vicepresidencia'),
        ('second_vice', 'Segunda Vicepresidencia'),
    ]
    
    party = models.ForeignKey(PoliticalParty, on_delete=models.CASCADE, related_name='candidates')
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    bio = models.TextField()
    photo = models.ImageField(upload_to='candidates/photos/')
    
    class Meta:
        verbose_name = 'Candidato'
        verbose_name_plural = 'Candidatos'
        ordering = ['party', 'role']
    
    def __str__(self):
        return f"{self.name} - {self.get_role_display()} ({self.party.name})"


class GovernmentPlan(models.Model):
    party = models.OneToOneField(PoliticalParty, on_delete=models.CASCADE, related_name='government_plan')
    document = models.FileField(upload_to='plans/documents/', null=True, blank=True)
    
    class Meta:
        verbose_name = 'Plan de Gobierno'
        verbose_name_plural = 'Planes de Gobierno'
    
    def __str__(self):
        return f"Plan de Gobierno - {self.party.name}"


class PlanAxis(models.Model):
    plan = models.ForeignKey(GovernmentPlan, on_delete=models.CASCADE, related_name='axes')
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    
    class Meta:
        verbose_name = 'Eje del Plan'
        verbose_name_plural = 'Ejes del Plan'
    
    def __str__(self):
        return self.title


class PlanProposal(models.Model):
    plan = models.ForeignKey(GovernmentPlan, on_delete=models.CASCADE, related_name='proposals')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    
    class Meta:
        verbose_name = 'Propuesta'
        verbose_name_plural = 'Propuestas'
    
    def __str__(self):
        return self.title


class HistoricalMilestone(models.Model):
    party = models.ForeignKey(PoliticalParty, on_delete=models.CASCADE, related_name='milestones')
    year = models.IntegerField()
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    class Meta:
        verbose_name = 'Hito Histórico'
        verbose_name_plural = 'Hitos Históricos'
        ordering = ['party', 'year']
    
    def __str__(self):
        return f"{self.year} - {self.title}"
