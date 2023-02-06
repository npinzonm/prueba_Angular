import { Injectable } from '@angular/core';
import {PagePokemonI, PokemonI} from '../../modelos/listaPokemon.interface'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllPakemons(page:number):Observable<PagePokemonI>{
    let direccion = 'https://pokeapi.co/api/v2/pokemon?offset=' +(page*20) ;
    return this.http.get<PagePokemonI>(direccion)
  }
}
