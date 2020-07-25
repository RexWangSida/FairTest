from django.db import models

# Create your models here.
class Test(models.Model):
    name = models.CharField(max_length = 20)
    tid = models.CharField(max_length = 10, primary_key=True)
    status = models.IntegerField()
    duration = models.IntegerField()
    date = models.DateField()
    content = models.CharField(max_length = 1000)
    def __str__(self):
        return self.name
