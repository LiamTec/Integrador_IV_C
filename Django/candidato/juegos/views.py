from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import Game, UserScore

def game_list(request):
    games = Game.objects.filter(is_active=True)
    return render(request, 'juegos/game_list.html', {'games': games})

def game_detail(request, slug):
    game = get_object_or_404(Game, slug=slug, is_active=True)
    top_scores = UserScore.objects.filter(game=game).order_by('-score')[:5]
    return render(request, 'juegos/game_detail.html', {
        'game': game,
        'top_scores': top_scores
    })

@login_required
def play_game(request, slug):
    game = get_object_or_404(Game, slug=slug, is_active=True)
    questions = game.questions.all().order_by('?')[:10]  # Random 10 questions
    
    if request.method == 'POST':
        # Process game results
        score = 0
        for question in questions:
            answer_id = request.POST.get(f'question_{question.id}')
            if answer_id:
                if question.answers.get(id=answer_id).is_correct:
                    score += question.points
        
        # Save score
        UserScore.objects.create(
            user=request.user,
            game=game,
            score=score
        )
        
        return redirect('juegos:detail', slug=game.slug)
    
    return render(request, 'juegos/play_game.html', {
        'game': game,
        'questions': questions
    })

def leaderboard(request):
    games = Game.objects.filter(is_active=True)
    selected_game = request.GET.get('game')
    
    if selected_game:
        game = get_object_or_404(Game, slug=selected_game)
        scores = UserScore.objects.filter(game=game).order_by('-score')[:20]
    else:
        scores = UserScore.objects.all().order_by('-score')[:20]
    
    return render(request, 'juegos/leaderboard.html', {
        'scores': scores,
        'games': games,
        'selected_game': selected_game
    })
