from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=32)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'pk : {self.pk} , ' \
               f'title : {self.title}'