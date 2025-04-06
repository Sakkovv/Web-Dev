from django.shortcuts import render

# Create your views here.


from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class BookListView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class Bookinf(generics.ListCreateAPIView):
    queryset = Bookinf.objects.all()
    serializer_class = BookSerializer