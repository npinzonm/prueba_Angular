import { Component } from '@angular/core';
import { count } from 'rxjs';
import { PokemonI } from '../modelos/listaPokemon.interface';
import { ApiService } from '../servicios/api/api.service';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent {
  constructor(private api:ApiService){}

  pokemones:PokemonI[] = [];
  
  


  ngOnInit(): void {
    this.api.getAllPakemons(0).subscribe(data => {
      this.pokemones = data.results
    })
  }

}
