import { useQuery } from '@tanstack/react-query';

import { getPokemonList, getPokemonDetails } from '../../api/api';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Home() {
  const {
    data: listData,
    isLoading: listIsLoading,
    isError: listIsError,
  } = useQuery(['pokemonList', 0], () => getPokemonList(0 * 12));

  const { data, isLoading, isError } = useQuery(
    ['pokemonDetails', 'https://pokeapi.co/api/v2/pokemon/1/'],
    () => getPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/')
  );

  if (listData) {
    console.log('listData :>> ', listData);
  }

  if (data) {
    console.log('data :>> ', data);
  }

  return (
    <Container maxWidth="xl">
      <Grid mt={4} container spacing={2}>
        <Grid item xs={6}>
          <Paper>qwe</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>asd</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
