import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;
  image: string;
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() like: EventEmitter<{ id: number, likes: number }> = new EventEmitter();

  onRemove(productId: number) {
    this.remove.emit(productId);
  }

  onLike(event: { id: number, likes: number }) {
    this.like.emit(event);
  }
}
