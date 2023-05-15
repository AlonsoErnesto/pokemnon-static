import { pokeApi } from '@/api';
import {Layout} from '@/components/layouts';
import { PokemonCard } from '@/components/pokemon';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Grid } from '@nextui-org/react';
import { NextPage,GetStaticProps } from 'next';

interface Props { 
  pokemons : SmallPokemon[];

}


const HomePage:NextPage<Props> = ({pokemons}) => {
  return (
    <>
      <Layout titlePage="Pokemon GO!">
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
          ))}
          </Grid.Container>
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
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }
  ))
  return {
    props: {
      pokemons
    }
  }
}
