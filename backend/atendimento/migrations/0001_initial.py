# Generated by Django 4.0.4 on 2022-05-12 01:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cliente', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Atendimento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.DateField()),
                ('hora', models.TimeField()),
                ('servico', models.CharField(choices=[('AS', 'Ajuda com Suporte'), ('AP', 'Ajuda com Pagamentos'), ('AS', 'Ajuda com Senha'), ('AC', 'Ajuda com Cartão'), ('AR', 'Ajuda com Reembolsos')], max_length=2)),
                ('descricao', models.CharField(max_length=255)),
                ('tipo', models.CharField(choices=[('AS', 'Ajuda com Suporte'), ('AP', 'Ajuda com Pagamentos'), ('AS', 'Ajuda com Senha'), ('AC', 'Ajuda com Cartão'), ('AR', 'Ajuda com Reembolsos')], max_length=2)),
                ('idcliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cliente.cliente')),
            ],
        ),
    ]
