from django.contrib import admin
from .models import Test, Question
# Register your models here.
class TestAdmin(admin.ModelAdmin):
    list_display = ('name', 'tid', 'status', 'duration', 'date')
    ordering = ('tid',)
    search_fields = ('tid',)

admin.site.register(Test)



class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question', 'qid', 'test', 'type', 'A', 'B', 'C', 'D')
    ordering = ('qid',)
    search_fields = ('qid',)

admin.site.register(Question)
