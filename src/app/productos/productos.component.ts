import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
returnLogin() {

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

  returnToProducts(products: Product) {
    this.router.navigate(['pro']);
  }
}

export interface Product {
  id: number,
  title: string,
  imageUrl: string,
  subtitle: string,
  description: string,
  price: number,
  itbms: number
}
