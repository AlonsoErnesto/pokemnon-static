import { Grid } from '@nextui-org/react';
import FavoriteCardPokemon from './FavoriteCardPokemon';

interface FavoritePokemonsProps {
  pokemons:number[];
} 
const FavoritePokemons:React.FC<FavoritePokemonsProps> = ({pokemons}) => {
  return (
   <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map((id)=>(
          <FavoriteCardPokemon key={id} pokemonid={id}/>
        ))
      }
   </Grid.Container>
  )
}

export default FavoritePokemons;