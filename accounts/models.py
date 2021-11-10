from django.contrib.auth.models import User
from django.db import models


class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    phone_number = models.CharField(max_length=11, null=True)