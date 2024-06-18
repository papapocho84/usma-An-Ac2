import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../productos/productos.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  returnToProducts() {
  }
  products: Product[] = [
    {
      id: 1,
      title: 'HPE Proliant-DL325',
      imageUrl: '/assets/images/DL325.png',
      subtitle: 'DL325 Gen11',
      description: 'Cargas de trabajo virtualizadas (computación definida por software, CDN y VDI) junto con aplicaciones seguras en el extremo que requieran un equilibrio entre procesador, memoria y ancho de banda de red.',
      price: 5899,
      itbms: 7
    },
    {
      id: 2,
      title: 'HPE Proliant-DL345',
      imageUrl: '/assets/images/DL345.png',
      subtitle: 'DL345 Gen11',
      description: 'Cargas de trabajo de uso intensivo de datos almacenamiento definido por software, transcodificación de vídeos, etc.) y aplicaciones virtualizadas que requieren grandes cantidades de almacenamiento y un mayor ancho de banda de memoria y de E/S.',
      price: 6899,
      itbms: 7
    },
    {
      id: 3,
      title: 'HPE Proliant-DL365',
      imageUrl: '/assets/images/DL365.png',
      subtitle: 'DL365 Gen11',
      description: 'Las cargas de trabajo de EDA, CAD, de propósito general y de virtualización (incluido VDI) requieren una gran densidad de computación con seguridad integrada y flexibilidad.',
      price: 7899,
      itbms: 7
    },
    {
      id: 4,
      title: 'HPE Proliant-DL385',
      imageUrl: '/assets/images/DL385.png',
      subtitle: 'DL385 Gen11',
      description: 'Cargas de trabajo exigentes para computación y almacenamiento de datos (inteligencia artificial, aprendizaje automático, análisis de bases de datos) que requieran un mayor número de núcleos, capacidades de GPU, red y ancho de banda de E/S.',
      price: 10000,
      itbms: 7
    }
  ];

  product: Product = {
    id: 0,
    title: '',
    imageUrl: '',
    subtitle: '',
    description: '',
    price: 0,
    itbms: 0
  };

  viewProduct(product: Product) {
    this.router.navigate(['product', product.id]);
  }

  returnLogin(): void{
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = +params['id'];
      this.product = this.products.find(p => p.id === productId) ?? this.product;;
    });
  }
 
}
