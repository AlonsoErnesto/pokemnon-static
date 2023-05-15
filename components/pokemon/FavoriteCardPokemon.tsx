import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface FavoriteCardIdProps {
  pokemonid:number
}

const FavoriteCardPokemon:React.FC<FavoriteCardIdProps> = ({pokemonid}) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonid}`);
  }


  return (
   <Grid xs={6} sm={3} md={2} xl={1} key={pokemonid} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{padding:10}}>
        <Card.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonid}.svg`} 
          width={'100%'}
          height={140}
        />
      </Card>
   </Grid>
  )
}

export default FavoriteCardPokemon;