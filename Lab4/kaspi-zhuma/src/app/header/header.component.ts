import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  id: number;
  name: string;
  products?: any[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<Category>();

  showDropdown = false;

  toggleDropdown(event: MouseEvent) {
    event.preventDefault();
    this.showDropdown = !this.showDropdown;
  }

  selectCategory(category: Category) {
    this.categorySelected.emit(category);
    this.showDropdown = false;
  }
}
