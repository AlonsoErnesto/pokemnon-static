import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { localFavorites } from '@/utils';
import { NoFavorites } from '@/components/ui';
import {FavoritePokemons} from '@/components/pokemon';


const Favoritos = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);


  return (
    <Layout titlePage="Pokemons favoritos">
      {(favoritesPokemons.length === 0) 
        ? <NoFavorites/> 
        : <FavoritePokemons pokemons={favoritesPokemons}/>
      }
    </Layout>
  )
}

export default Favoritos;