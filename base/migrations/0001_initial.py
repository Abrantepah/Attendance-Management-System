# Generated by Django 4.2.6 on 2024-05-20 18:10

import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('code', models.CharField(max_length=13, unique=True)),
                ('year', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(8)])),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dno', models.PositiveIntegerField(unique=True)),
                ('dname', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Lecturer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('reference', models.CharField(max_length=12, unique=True)),
                ('email', models.EmailField(max_length=254, null=True, unique=True)),
                ('passwordChanged', models.BooleanField(default=False)),
                ('department', models.ManyToManyField(to='base.department')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('expiration_time', models.DateTimeField(default=datetime.datetime(2024, 5, 20, 18, 20, 16, 92054, tzinfo=datetime.timezone.utc))),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.course')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reference', models.CharField(max_length=12, unique=True)),
                ('index', models.CharField(max_length=12, unique=True)),
                ('name', models.CharField(max_length=70)),
                ('year', models.PositiveIntegerField()),
                ('UUID', models.CharField(blank=True, max_length=38, null=True, unique=True)),
                ('UUID_sent', models.BooleanField(default=False)),
                ('passwordChanged', models.BooleanField(default=False)),
                ('Total_strike', models.PositiveIntegerField(default=0, editable=False)),
                ('programme', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.department')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StudentCourse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('strike', models.PositiveIntegerField(default=0)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.student')),
            ],
        ),
        migrations.CreateModel(
            name='Usernames_only',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('save_usernames', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='VerificationCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, unique=True)),
                ('expiration_time', models.DateTimeField()),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('used', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.course')),
                ('lecturer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.lecturer')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.session')),
            ],
        ),
        migrations.CreateModel(
            name='StudentSession',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attended_start', models.BooleanField(null=True)),
                ('attended_end', models.BooleanField(null=True)),
                ('attended', models.BooleanField(null=True)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('studentcourse', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.studentcourse')),
            ],
        ),
        migrations.CreateModel(
            name='StudentPermission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('studentname', models.CharField(max_length=60)),
                ('index', models.PositiveIntegerField()),
                ('message', models.CharField(max_length=40, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('status', models.BooleanField(default=None, null=True)),
                ('sent', models.BooleanField(default=False, null=True)),
                ('studentsession', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='base.studentsession')),
            ],
        ),
        migrations.CreateModel(
            name='StudentCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10)),
                ('used', models.BooleanField(default=False)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.student')),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='department',
            field=models.ManyToManyField(to='base.department'),
        ),
        migrations.AddField(
            model_name='course',
            name='lecturer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='base.lecturer'),
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attended', models.BooleanField(default=False)),
                ('attended_start', models.BooleanField(default=False)),
                ('attended_end', models.BooleanField(default=False)),
                ('StudentCourse', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.studentcourse')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.session')),
            ],
        ),
    ]
