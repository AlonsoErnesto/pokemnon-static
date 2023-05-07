import { pokeApi } from '@/api';
import {Layout} from '@/components/layouts';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { NextPage,GetStaticProps } from 'next';

interface Props { 
  pokemons : SmallPokemon[];

}


const HomePage:NextPage<Props> = ({pokemons}) => {
  return (
    <>
      <Layout titlePage="Pokemon GO!">
        <ul>
          {pokemons.map((poke) => (
            <li key={poke.id}>
              #{poke.id} - {poke.name}
            </li> 
          ))}
        </ul>
      </Layout>
    </>
  )
};

export default HomePage;


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons : SmallPokemon[] = data.results.map((pokemon, i) => ( 
    {
      ...pokemon,
      id:i + 1,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.svg`
    }
  ))
  return {
    props: {
      pokemons
    }
  }
}