# Generated by Django 4.0.4 on 2022-05-26 20:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('funcionario', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='funcionario',
            name='tipo',
        ),
    ]
