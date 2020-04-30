


export class Pelicula{

    titulo:string;
    fecha:number;
    imagen:string;
    id:string;


    constructor(titulo:string,fecha:number,imagen:string,id?:string) {
        this.fecha=fecha;
        this.imagen=imagen;
        this.titulo=titulo;
        if(id){
            this.id=id;
        }
    }


}