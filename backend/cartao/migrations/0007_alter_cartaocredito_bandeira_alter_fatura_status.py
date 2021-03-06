# Generated by Django 4.0.4 on 2022-05-30 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cartao', '0006_remove_cartaocredito_id_alter_cartaocredito_bandeira_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartaocredito',
            name='bandeira',
            field=models.CharField(choices=[('VS', 'Visa'), ('EL', 'ELO'), ('MC', 'MasterCard'), ('HC', 'HiperCard')], max_length=2),
        ),
        migrations.AlterField(
            model_name='fatura',
            name='status',
            field=models.CharField(choices=[('PN', 'Pagamento Não Identificado'), ('PA', 'Pagamento Aprovado')], max_length=2),
        ),
    ]
