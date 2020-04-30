import { Component, OnInit } from '@angular/core';
import {Pelicula } from 'src/app/models/pelicula';
import { element } from 'protractor';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {

  detallesPeliculaActual: Pelicula;
  eliminarEstaPelicula: Pelicula;

  public peliculas: Pelicula[] = [];



  constructor(private peliculasService: PeliculasService) {

    this.peliculasService.obtenerPeliculas().subscribe( (resp:any)=>{
      const films = resp.Search;
      films.forEach(element => {
        const aux= new Pelicula(element.Title,element.Year,element.Poster,element.imdbID);
        this.peliculas.push(aux);
      });
    }, errores=>{
      console.log(errores);
    } );



    // for(let index = 0; index < 10; index++){

    //   let aux = new Pelicula('Celular',2020+index,'https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg')

    //   this.peliculas.push(aux);

      //this.peliculas.push( {'titulo':'Celular','fecha':2020,'imagen':'https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg'} );

    //  s
     console.log(this.peliculas);

   }

  ngOnInit(): void {
  }

  recibirDetallePelicula(e){
    //console.log(e);
    this.detallesPeliculaActual = e;
  }

  recibirPeliculaAEliminar(peliculaAEliminar) {
    //console.log( peliculaAEliminar);
    let indice;
    for (let index = 0; index < this.peliculas.length; index++) {
      if (this.peliculas[index].id === peliculaAEliminar.id) {
      //if (this.peliculas[index].fecha === peliculaAEliminar.fecha) {
        indice = index;
      }

    };

    if(indice){
      this.peliculas.splice(indice, 1);
    }

  }




}
