from django.urls import path
from . import views

app_name = 'juegos'

urlpatterns = [
    path('', views.game_list, name='list'),
    path('<slug:slug>/', views.game_detail, name='detail'),
    path('<slug:slug>/play/', views.play_game, name='play'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
]
