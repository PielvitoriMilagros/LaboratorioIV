import { Component, OnInit } from '@angular/core';
import { Producto } from '../../clases/producto';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  producto = new Producto();
  listado: Producto[];

  title = "Ejercicio01";

  constructor(private route: Router) { 

    this.listado = [
      { id:1, descripcion:'Leche',tipo:'Líquido',fechaDeVencimiento:'20200413',precio:222,rutaDeFoto:'/assets/imagenes/Leche.jpg'},
      { id:2, descripcion:'Fideos',tipo:'Sólido',fechaDeVencimiento:'20200101',precio:115,rutaDeFoto:'/assets/imagenes/Fideos.jpg'}
    ];

  }

  ngOnInit(): void {
  }








}
