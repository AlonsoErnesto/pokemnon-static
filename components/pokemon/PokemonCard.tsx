import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from "next/router";


interface PokemonCardProps {
   pokemon : SmallPokemon
}

const PokemonCard:React.FC<PokemonCardProps> = ({pokemon:{id,img,name}}) => {

   const router = useRouter()

   const onClickPokemon = () => {
      router.push(`/name/${name}`);
   };


  return (
   <Grid xs={6}  sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={onClickPokemon}>
         <Card.Body css={{p:1}}>
            <Card.Image src={img} width="100%" height={140}/>
         </Card.Body>
         <Card.Footer>
            <Row justify='space-between'>
               <Text transform='capitalize' >{name}</Text>
               <Text>#{id}</Text>
            </Row>
         </Card.Footer>
      </Card>
   </Grid> 
  )
}

export default PokemonCard;