from django.contrib import admin
from .models import Test
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'tid', 'status', 'duration', 'date', 'content')
    ordering = ('tid',)
    search_fields = ('tid',)

admin.site.register(Test)
