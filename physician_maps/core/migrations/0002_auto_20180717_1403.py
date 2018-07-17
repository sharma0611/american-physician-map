# Generated by Django 2.0.7 on 2018-07-17 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='prefix',
            field=models.CharField(default='', max_length=10, verbose_name='Prefix'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='doctor',
            name='specialty',
            field=models.CharField(default='', max_length=50, verbose_name='Speciality'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='doctor',
            name='name',
            field=models.CharField(max_length=150, verbose_name='Name'),
        ),
    ]
