# Generated by Django 4.2.6 on 2023-11-16 02:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_remove_studentpermission_dstrike_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentpermission',
            name='sent',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='session',
            name='expiration_time',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 16, 2, 54, 8, 473657, tzinfo=datetime.timezone.utc)),
        ),
    ]
