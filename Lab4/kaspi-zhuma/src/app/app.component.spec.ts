import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, ProductsComponent]
})
export class AppComponent {
  title = 'kaspi-zhuma';
}
