export interface PagePokemonI { //Pagina pokemon
    count:number
    results:PokemonI[]
}
export interface PokemonI { //Listado results , donde está la información de 
    name:string;
    url:string;    
}