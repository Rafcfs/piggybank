# Generated by Django 4.0.4 on 2022-05-26 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cartao', '0005_alter_cartaocredito_bandeira_alter_fatura_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartaocredito',
            name='bandeira',
            field=models.CharField(choices=[('HC', 'HiperCard'), ('EL', 'ELO'), ('MC', 'MasterCard'), ('VS', 'Visa')], max_length=2),
        ),
        migrations.AlterField(
            model_name='fatura',
            name='status',
            field=models.CharField(choices=[('PN', 'Pagamento Não Identificado'), ('PA', 'Pagamento Aprovado')], max_length=2),
        ),
    ]
