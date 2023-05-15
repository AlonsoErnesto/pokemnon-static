import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { localFavorites } from "@/utils";
import getPokemonInfo from "@/utils/getPokemonInfo";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

interface PokemonPageProps {
   pokemon : Pokemon;
}


const pokemonbynamepage:React.FC<PokemonPageProps> = ({pokemon}) => {

   const pokeExist = localFavorites.existInFavorites(pokemon.id);
   const [isInFavorites, setIsInFavorites] = useState(pokeExist);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if(!isInFavorites) return;
    confetti({
      zIndex:999, 
      particleCount:100,
      spread:160, // 160px
      angle:-100,
      origin : {
        x:1,
        y:.1,
      }
    })
  }


  return (
   <Layout titlePage={pokemon.name}>
     <Grid.Container css={{marginTop:'5px'}} gap={2}>
       <Grid xs={12} sm={4}>
         <Card hoverable css={{padding:'30px'}}>
           <Card.Body>
             <Card.Image 
               src={pokemon.sprites.other?.dream_world.front_default || ''} 
               alt={pokemon.name}
               width="100%"
               height={200}
             />
           </Card.Body>
         </Card>
       </Grid>
       <Grid xs={12} sm={8}>
         <Card>
           <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
             <Text h1>{pokemon.name}</Text>
             <Button 
               color="gradient" 
               ghost={!isInFavorites} 
               onClick={onToggleFavorite}
               >
                 {isInFavorites ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
               </Button>
           </Card.Header>
           <Card.Body>
             <Text size={30}>Sprites : {}</Text>
             <Container direction="row" display="flex" gap={0}>
               <Image 
                 src={pokemon.sprites.front_default} 
                 alt={pokemon.name}
                 width={100}
                 height={100}
               />
                <Image 
                 src={pokemon.sprites.back_default} 
                 alt={pokemon.name}
                 width={100}
                 height={100}
               />
                <Image 
                 src={pokemon.sprites.front_shiny} 
                 alt={pokemon.name}
                 width={100}
                 height={100}
               />
                <Image 
                 src={pokemon.sprites.back_shiny} 
                 alt={pokemon.name}
                 width={100}
                 height={100}
               />
             </Container>
           </Card.Body>
         </Card>
       </Grid>
     </Grid.Container>
   </Layout>
  )
}
export default pokemonbynamepage;

// Ejecuta primero los getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {


  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons:string[] = data.results.map(pokemon => pokemon.name);
  return {
    paths : pokemons.map(name=>({
      params:{name}
    })),
    // 404 para paginas que no estemos creando en paths.params
    fallback: false
  }
}


// Se ejecuta segundo los getStaticProps (consumo de Api)
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { name } = ctx.params as {name: string }; // [name].tsx
  const pokemon = await getPokemonInfo(name);
  return {
    props: {
      pokemon
    }
  }
}