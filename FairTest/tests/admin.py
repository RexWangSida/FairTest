from django.contrib import admin
from .models import Test, SAQuestion, MCQuestion, TFQuestion
# Register your models here.
class TestAdmin(admin.ModelAdmin):
    list_display = ('name', 'tid', 'status', 'duration', 'date')
    ordering = ('tid',)
    search_fields = ('tid',)

admin.site.register(Test)

class SAQuestionAdmin(admin.ModelAdmin):
    list_display = ('question', 'qid', 'test', 'type')
    ordering = ('qid',)
    search_fields = ('qid',)

admin.site.register(SAQuestion)

class MCQuestionAdmin(admin.ModelAdmin):
    list_display = ('question', 'qid', 'test', 'type', 'A', 'B', 'C', 'D')
    ordering = ('qid',)
    search_fields = ('qid',)

admin.site.register(MCQuestion)

class TFQuestionAdmin(admin.ModelAdmin):
    list_display = ('question', 'qid', 'test', 'type')
    ordering = ('qid',)
    search_fields = ('qid',)

admin.site.register(TFQuestion)
