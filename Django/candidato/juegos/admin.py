from django.contrib import admin
from .models import Game, Question, Answer, UserScore

class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 2

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['text', 'game', 'party', 'question_type', 'points']
    list_filter = ['game', 'party', 'question_type']
    inlines = [AnswerInline]

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ['title', 'difficulty', 'time_minutes', 'max_players', 'is_active']
    list_filter = ['difficulty', 'is_active']
    prepopulated_fields = {'slug': ('title',)}

@admin.register(UserScore)
class UserScoreAdmin(admin.ModelAdmin):
    list_display = ['user', 'game', 'score', 'date_played']
    list_filter = ['game', 'date_played']
