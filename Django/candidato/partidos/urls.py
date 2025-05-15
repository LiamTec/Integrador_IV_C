from django.urls import path
from . import views

app_name = 'partidos'

urlpatterns = [
    path('', views.party_list, name='list'),
    path('<slug:slug>/', views.party_detail, name='detail'),
]
