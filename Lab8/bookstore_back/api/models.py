from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255),
    author = models.CharField(max_length=255)
    price = models.FloatField()
    stock = models.IntegerField()
    is_available = models.BooleanField()

    def to_json(self):
        return{
            'id':self.id,
            'title':self.title,
            'price':self.price,
            'stock':self.stock,
            'is_aviable':self.is_aviable
        }