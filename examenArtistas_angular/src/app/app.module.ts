import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './Rutas/artista/artista.component';
import { AlbumComponent } from './Rutas/album/album.component';
import {AlbumApiService} from "./Services/album-api.service";
import {ArtistaApiService} from "./Services/artista-api.service";
import { InicioComponent } from './inicio/inicio.component';
import {RutasAppModule} from "./routes";
import {MasterurlService} from "./Services/masterurl.service";
import { ListaArtistaComponent } from './Rutas/artista/lista-artista/lista-artista.component';
import { ListaAlbumsComponent } from './Rutas/album/lista-albums/lista-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    AlbumComponent,
    InicioComponent,
    ListaArtistaComponent,
    ListaAlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule
  ],
  providers: [
    AlbumApiService,
    ArtistaApiService,
    MasterurlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
