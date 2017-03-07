import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {ArtistaComponent} from "./Rutas/artista/artista.component";
import {AlbumComponent} from "./Rutas/album/album.component";
import {InicioComponent} from "./inicio/inicio.component";
import {ListaArtistaComponent} from "./Rutas/artista/lista-artista/lista-artista.component";
import {ListaAlbumsComponent} from "./Rutas/album/lista-albums/lista-albums.component";


export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path: 'artista', component: ArtistaComponent},
  {path:'listaArtista',component:ListaArtistaComponent},
  {path: 'album/:idArtista', component: AlbumComponent},
  {path: 'listaAlbum', component:ListaAlbumsComponent}

];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
