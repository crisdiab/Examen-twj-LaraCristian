import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AlbumApiService} from "../../Services/album-api.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private _parametros: any;
  albums:any=[];

  disabledButtons = {
    NuevoArtistaFormSubmitButton: false,
    verAlbums:false
  };
  nuevoAlbum={

  };
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _AlbumApiService: AlbumApiService

  ) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
      });
  }
  crearAlbum(formulario: NgForm){
    var url;
    if(formulario.value.UrlPortada==undefined){
      url="https://f4.bcbits.com/img/0006941519_10.jpg";
    }else{
     url=formulario.value.UrlPortada
    }
    let nuevoAlbum={
      idArtista:this._parametros.idArtista,
      fechaLanzamiento:formulario.value.fechaLanzamiento,
      nombre:formulario.value.nombre,
      UrlPortada: url

    };
    console.log(nuevoAlbum);

    this.disabledButtons.NuevoArtistaFormSubmitButton=true;
    this._AlbumApiService.create(nuevoAlbum)
      .subscribe(
        (res: Response)=>{


          this.nuevoAlbum={};
          this.disabledButtons.NuevoArtistaFormSubmitButton=false;
        },
        (err)=>{
          console.log(err)
        }
      )
  }

}

