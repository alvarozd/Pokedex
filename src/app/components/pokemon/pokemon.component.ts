import { PokemonService } from './../../services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

name: string = ''
urlimg: string = ''
tipos: any = ''
habilidades: any = ''
constructor(private pokemonservice : PokemonService) {

}

async buscar(){

  this.pokemonservice.getPokemon(this.name).subscribe((data: any) =>{

   console.log(data)

   this.urlimg = data.sprites.front_default
  this.tipos = data.types
  this.habilidades = data.moves

  })
}



}
