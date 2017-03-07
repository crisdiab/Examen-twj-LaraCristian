import { Component, OnInit } from '@angular/core';
import {ArtistaApiService} from "../../../Services/artista-api.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-lista-artista',
  templateUrl: './lista-artista.component.html',
  styleUrls: ['./lista-artista.component.css']
})
export class ListaArtistaComponent implements OnInit {

  titulo:String="Lista de Artistas registrados";
  artistas:any=[];
  estilos=['Rock','Regae','Pop','Cumbia','Regueaton'];
  disabledButtons = {
    NuevoArtistaFormSubmitButton: false
  };
  constructor(private _artistaApiService:ArtistaApiService) { }

  ngOnInit() {
    this._artistaApiService.get()
      .subscribe(
        (res: Response) => {
          this.artistas = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
          console.log('artistas',this.artistas)

        },
        (err) => {
          console.log(err);
        }
      )
  }
  actualizarArtista(artista:any){
    console.log('entro en actualizar artista');
    console.log(artista);
    console.log(artista.id);
    this._artistaApiService.update(artista,artista.id)
      .subscribe(

      (res: Response) => {

        console.log("No hubo Errores");

        console.log(res);

        artista.formularioCerrado = !artista.formularioCerrado;

        console.log("Respuesta:", res.json());

      },

      (err) => {

        this.disabledButtons.NuevoArtistaFormSubmitButton = false;

        console.log("Ocurrio un error", err);

      },

      () => {

        console.log("Termino la función ")

      }

    );

  }
  borrarArtista(idArtista:number){
    console.log('entro en borrar artista')
    this._artistaApiService.delete(idArtista)
      .subscribe(
        (res: Response) => {
          console.log('borrado correctamente');
          let tiendaBorrada = res.json();
          this.artistas = this.artistas.filter(value => tiendaBorrada.id != value.id);
        },
        (err) => {
          console.log(err);
        }

      );
  }

}
