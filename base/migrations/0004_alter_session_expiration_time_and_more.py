# Generated by Django 4.2.7 on 2023-12-25 01:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_session_expiration_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='expiration_time',
            field=models.DateTimeField(default=datetime.datetime(2023, 12, 25, 1, 49, 17, 269801, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='student',
            name='Total_strike',
            field=models.PositiveIntegerField(default=0, editable=False),
        ),
    ]
