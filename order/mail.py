from django import forms
from django.conf import settings
from django.core.mail import send_mail
from ecommerce.settings import EMAIL_HOST_USER

class SendMail:
    def send(email, content):
        send_mail(
            subject="Send mail check",
            message=content,
            from_email=EMAIL_HOST_USER,
            recipient_list=[email]
        )
