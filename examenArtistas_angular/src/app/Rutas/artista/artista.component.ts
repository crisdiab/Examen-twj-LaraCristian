import {Component, OnInit, Renderer} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ArtistaApiService} from "../../Services/artista-api.service";
import {NgForm} from "@angular/forms";
import {MasterurlService} from "../../Services/masterurl.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
titulo:String='Bienvenido a Crear Artistas';

estilos=['Rock','Regae','Pop','Cumbia'];

nuevoArtista={
  nombre:'',
  paisResidencia:'',
  estilo:''
};
  disabledButtons = {
    NuevoArtistaFormSubmitButton: false
  };


  constructor(private _http:Http,
              private _artistaApiService:ArtistaApiService,
  ) {
    this._http=_http;

  }

  ngOnInit() {



  }
  crearArtista(formulario: NgForm){
    this.disabledButtons.NuevoArtistaFormSubmitButton=true;
    this._artistaApiService.create(this.nuevoArtista)
      .subscribe(
        (res)=>{

          this.nuevoArtista={
            nombre:'',
            paisResidencia:'',
            estilo:''
          };
          this.disabledButtons.NuevoArtistaFormSubmitButton=false;
        },
        (err)=>{
          console.log(err)
        }
      )
  }

}
