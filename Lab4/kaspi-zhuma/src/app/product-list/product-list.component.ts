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
  hasVoted?: boolean;
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
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<{ id: number, likes: number }>();

  onRemove(productId: number) {
    this.remove.emit(productId);
  }

  onLike(event: { id: number, likes: number }) {
    this.like.emit(event);
  }
}
