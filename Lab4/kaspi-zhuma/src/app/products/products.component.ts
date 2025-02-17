import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products = [
    //1
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/p0a/p0f/13903998.jpeg?format=gallery-medium',
      name:'iPhone 16 Pro Max',
      description:'Смартфон Apple iPhone 16 Pro Max 1Tb Dual Sim белый',
      price: 1067999,
      rating:'0',
      link:'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-1tb-dual-sim-belyi-131637785/?c=750000000'
    },

    //2
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name:'Apple Watch',
      description:'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      price: 117991,
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },

    //3
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      name:'PlayStation 5',
      description:'Игровая приставка Sony PlayStation 5 Slim',
      price: 301533 ,
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },

    //4
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      name:'Умная колонка Яндекс',
      description:'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
      price: 30360,
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000'
    },

    //5
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/h6f/h5f/86722325741598.jpg?format=gallery-medium',
      name:'Lenovo ThinkPad X1 Carbon',
      description:'Ноутбук Lenovo ThinkPad X1 Carbon 14" / 64 Гб / SSD 1000 Гб / Win 11 Pro / 21KDS34M00',
      price: 3399889 ,
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-14-64-gb-ssd-1000-gb-win-11-pro-21kds34m00-122143194/?c=750000000'
    },


    //6
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/h2b/h24/65112097259550.jpg?format=gallery-medium',
      name:'Teris TS350CF',
      description:'Штатив Teris TS350CF Fluid Head & Tripod Kit',
      price: 2362530,
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/teris-ts350cf-fluid-head-tripod-kit-105011770/?c=750000000'
    },


    //7
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/pf5/p4c/5493701.jpg?format=gallery-medium',
      name:'Кофемашина VBM',
      description:'Кофемашина VBM Lollo 2GR черный',
      price: 2232000,
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/kofemashina-vbm-lollo-2gr-chernyi-129156533/?c=750000000'
    },


    //8
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/paf/pcd/23650757.jpg?format=gallery-medium',
      name:'Телевизор Samsung',
      description:'Телевизор Samsung QE98QN90DAUXCE 249 см серебристый',
      price: 4999990,
      rating:'0',
      link:'https://kaspi.kz/shop/p/samsung-qe98qn90dauxce-249-sm-serebristyi-podarok-134357617/?c=750000000'
    },


    //9
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      name:'Coca-Cola 1Л',
      description:'Coca-Cola газированный напиток кола 1 л',
      price: 'Бесценно',
      rating:'5.0',
      link:'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },


    //10
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/h23/h61/86300295856158.png?format=gallery-medium',
      name:'Мини-трактор',
      description:'Мини-трактор Рустрак дизельный ХТ244-2',
      price: 4990000 ,
      rating:'0',
      link:'https://kaspi.kz/shop/p/rustrak-dizel-nyi-ht244-2-120492737/?c=750000000'
    },
  ];
  shareWhatsApp(link: string){
    const message = 'Посмотреть товар: ${link}';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  }
  shareTelegram(link: string) {
    const message = `Посмотреть товар: ${link}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/share/url?url=${link}&text=${encodedMessage}`, '_blank');
  }
}
