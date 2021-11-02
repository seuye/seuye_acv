from django.db import models

# Create your models here.

class Post(models.Model) :
    title = models.CharField(max_length=32)
    header_image = models.ImageField(
        upload_to="blog/image/%Y/%m/%d",
        blank=True,
        null=True
    )
    content = models.TextField()
    likes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"id: {self.id}, header_image: {self.header_image}"
