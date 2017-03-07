import { Component, OnInit } from '@angular/core';
import {AlbumApiService} from "../../../Services/album-api.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-lista-albums',
  templateUrl: './lista-albums.component.html',
  styleUrls: ['./lista-albums.component.css']
})
export class ListaAlbumsComponent implements OnInit {
  titulo:String="Lista de Albums registrados"
  albums:any=[];
  disabledButtons = {
    NuevoArtistaFormSubmitButton: false
  };

  constructor(private _AlbumApiService: AlbumApiService,


  ) { }

  ngOnInit() {
    this._AlbumApiService.get()
      .subscribe(
        (res: Response) => {
          this.albums = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
          console.log('albums',this.albums)

        },
        (err) => {
          console.log(err);
        }
      )

  }

  actualizarAlbum(album:any){
    console.log('entro en actualizar artista');

    this._AlbumApiService.update(album,album.id)
      .subscribe(

        (res: Response) => {

          console.log("No hubo Errores");

          console.log(res);

          album.formularioCerrado = !album.formularioCerrado;

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
  borrarAlbum(idArtista:number){
    console.log('entro en borrar artista')
    this._AlbumApiService.delete(idArtista)
      .subscribe(
        (res: Response) => {
          console.log('borrado correctamente');
          let albumBorrado = res.json();
          this.albums = this.albums.filter(value => albumBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }

      );
  }

}
