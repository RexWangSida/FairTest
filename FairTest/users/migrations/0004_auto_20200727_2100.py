# Generated by Django 3.0.3 on 2020-07-27 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20200727_2056'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='uid',
        ),
        migrations.AddField(
            model_name='user',
            name='id',
            field=models.AutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]