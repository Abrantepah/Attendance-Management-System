# Generated by Django 4.2.6 on 2023-10-24 13:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_session_expiration_time'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Glocation',
        ),
        migrations.AlterField(
            model_name='session',
            name='expiration_time',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 24, 13, 20, 3, 517032, tzinfo=datetime.timezone.utc)),
        ),
    ]
