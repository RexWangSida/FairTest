from django.db import models
from django_mysql.models import ListCharField

# Create your models here.
class User(models.Model):
    email = models.CharField(max_length = 60, unique=True)
    uid = models.CharField(max_length = 10, unique=True, primary_key=True)
    school = models.CharField(max_length = 30)
    password = models.CharField(max_length = 6)
    firstName = models.CharField(max_length = 30)
    lastName = models.CharField(max_length = 30)
    regTests = ListCharField(
        base_field=models.CharField(max_length=10),
        size=10,
        max_length=(10 * 11)  # 6 * 10 character nominals, plus commas
    )

    def __str__(self):
        return self.firstName + " " + self.lastName
