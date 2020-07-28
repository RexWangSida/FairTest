from django.db import models

# Create your models here.
class Test(models.Model):
    name = models.CharField(max_length = 20)
    tid = models.CharField(max_length = 10, primary_key=True)
    status = models.IntegerField()
    duration = models.IntegerField()
    date = models.DateField()
    def __str__(self):
        return self.name


class Question(models.Model):
    question = models.CharField(max_length = 200)
    qid = models.CharField(max_length = 10, primary_key=True)
    A = models.CharField(max_length = 100,null=True, blank=True)
    B = models.CharField(max_length = 100,null=True, blank=True)
    C = models.CharField(max_length = 100,null=True, blank=True)
    D = models.CharField(max_length = 100,null=True, blank=True)
    test = models.ManyToManyField(Test)
