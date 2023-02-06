import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    DetallePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
