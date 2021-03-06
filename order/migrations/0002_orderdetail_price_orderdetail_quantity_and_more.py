# Generated by Django 4.0.3 on 2022-05-05 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderdetail',
            name='price',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='orderdetail',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='payment',
            name='card_number',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='payment',
            name='ccv',
            field=models.CharField(max_length=3, null=True),
        ),
    ]
