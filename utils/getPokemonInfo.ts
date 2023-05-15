import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";


const getPokemonInfo = async (param:string) => {

   const {data} = await pokeApi.get<Pokemon>(`/pokemon/${param}`);
   return {
     id:data.id,
     name:data.name,
     sprites:data.sprites, 
   }
};

export default getPokemonInfo;