# Generated by Django 4.0.4 on 2022-05-30 23:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('funcionario', '0002_remove_funcionario_tipo'),
        ('atendimento', '0005_alter_atendimento_idfuncionario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='atendimento',
            name='idfuncionario',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.PROTECT, to='funcionario.funcionario'),
        ),
    ]
