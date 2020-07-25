from django.contrib import admin
from .models import User
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname', 'email', 'school', 'pasword')
    ordering = ('school',)
    search_fields = ('email',)

admin.site.register(User)
