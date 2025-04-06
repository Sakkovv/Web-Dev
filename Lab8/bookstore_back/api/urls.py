
from django.contrib import admin
from django.urls import path
from .models import BookListView

urlpatterns = [
    path('Book/', BookListView.as_view(), name='Book-list'),
    path('Books/<int:id>/', BookSerializer.as_view(), name='Book')
]


