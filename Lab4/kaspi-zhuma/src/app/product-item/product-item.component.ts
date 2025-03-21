import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<{ id: number, likes: number }>();

  onLike() {
    if (!this.product.hasVoted) {
      this.product.likes++;
      this.product.hasVoted = true;
      this.like.emit({ id: this.product.id, likes: this.product.likes });
    }
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }
}
