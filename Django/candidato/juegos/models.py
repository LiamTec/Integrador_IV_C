from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from django.contrib.auth.models import User
from partidos.models import PoliticalParty

class Game(models.Model):
    DIFFICULTY_CHOICES = [
        ('easy', 'Fácil'),
        ('medium', 'Medio'),
        ('hard', 'Difícil'),
    ]
    
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to='games/images/')
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default='medium')
    time_minutes = models.IntegerField(default=5)
    max_players = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = 'Juego'
        verbose_name_plural = 'Juegos'
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('juegos:detail', args=[self.slug])
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Question(models.Model):
    QUESTION_TYPE_CHOICES = [
        ('multiple', 'Opción Múltiple'),
        ('true_false', 'Verdadero/Falso'),
        ('open', 'Respuesta Abierta'),
    ]
    
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='questions')
    party = models.ForeignKey(PoliticalParty, on_delete=models.SET_NULL, null=True, blank=True, related_name='questions')
    text = models.TextField()
    question_type = models.CharField(max_length=10, choices=QUESTION_TYPE_CHOICES)
    points = models.IntegerField(default=10)
    
    class Meta:
        verbose_name = 'Pregunta'
        verbose_name_plural = 'Preguntas'
    
    def __str__(self):
        return self.text[:50]


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)
    
    class Meta:
        verbose_name = 'Respuesta'
        verbose_name_plural = 'Respuestas'
    
    def __str__(self):
        return self.text


class UserScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scores')
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name='scores')
    score = models.IntegerField()
    date_played = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Puntuación'
        verbose_name_plural = 'Puntuaciones'
        ordering = ['-score', '-date_played']
    
    def __str__(self):
        return f"{self.user.username} - {self.game.title} - {self.score}"
