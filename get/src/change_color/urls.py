from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.arg_handler, name='arg_handler')
]
