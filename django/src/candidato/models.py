from django.db import models

# Modelo para la tabla Departamentos
class Departamento(models.Model):
    nombre = models.CharField(max_length=100)
    region = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

# Modelo para la tabla Preguntas
class Pregunta(models.Model):
    question_text = models.CharField(max_length=255)
    question_type = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question_text

# Modelo para la tabla Respuestas
class Respuesta(models.Model):
    puntos = models.IntegerField()
    completado = models.BooleanField(default=False)
    pregunta = models.ForeignKey(Pregunta, related_name='respuestas', on_delete=models.CASCADE)

    def __str__(self):
        return f"Respuesta a: {self.pregunta.question_text}"

# Modelo para la tabla Quizzes
class Quiz(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    pregunta = models.ForeignKey(Pregunta, related_name='quizzes', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

# Modelo para la tabla Usuarios
class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    departamento = models.ForeignKey(Departamento, related_name='usuarios', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    quiz = models.ForeignKey(Quiz, related_name='usuarios', on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
