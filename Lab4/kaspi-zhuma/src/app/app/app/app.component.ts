import { Component } from '@angular/core';


interface Product{
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;
  image: string;
  link: string;
}

interface Category{
  id:number;
  name:string;
  products: Product[];
}
@Component({
  selector: 'app-app',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [
    {
      id:1,
      name: "Смартфоны",
      products:[
        {
          id: 1,
          image:'https://resources.cdn-kaspi.kz/img/m/p/p0a/p0f/13903998.jpeg?format=gallery-medium',
          name:'iPhone 16 Pro Max',
          description:'Смартфон Apple iPhone 16 Pro Max 1Tb Dual Sim белый',
          price: 1067999,
          rating: 0,
          link:'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-dual-sim-belyi-131637785/?c=750000000',
          likes: 5
        },
      ]
    },
    {
      id:2,
      name: "Часы",
      products:[
        {
          id:2,
          image:'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
          name:'Apple Watch',
          description:'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
          price: 117991,
          rating: 5.0,
          link:'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
          likes:1000
        },
      ]
    },
    {
      id:3,
      name: "Игры",
      products:[
        {
          id:3,
          image:'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
          name:'PlayStation 5',
          description:'Игровая приставка Sony PlayStation 5 Slim',
          price: 301533 ,
          rating:5.0,
          link:'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
          likes:512
        },

      ]
    },
    {
      id:4,
      name: "Бытовая техника",
      products:[
        {
          id:4,
          image:'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
          name:'Умная колонка Яндекс',
          description:'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
          price: 30360,
          rating:5.0,
          link:'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
          likes:1278
        },
      ]
    }
  ];
  selectedCategory: Category | null= null;

  selectCategory(category: Category){
    this.selectedCategory = category;
  }
  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(
        product => product.id !== productId
      );
    }
  }
  updateLikes(event: {id:number, likes:number}){
    if(this.selectedCategory){
      const product = this.selectedCategory.products.find(p => p.id === event.id);
      if(product){
        product.likes = event.likes;
      }
    }
  }
}

