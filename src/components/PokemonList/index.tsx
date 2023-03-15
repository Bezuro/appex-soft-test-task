import { useQuery } from '@tanstack/react-query';
import { getPokemonList } from '../../api/api';
import { POKEMON_PER_PAGE } from '../../constants';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type PokemonListProps = {
  currentPage: number;
  onItemClick: (url: string) => void;
  onDataLoaded: (pageCount: number) => void;
};

function PokemonList(props: PokemonListProps) {
  const { onItemClick, currentPage, onDataLoaded } = props;

  const { data, isLoading, isError } = useQuery(
    ['pokemonList', currentPage],
    () => getPokemonList(currentPage * POKEMON_PER_PAGE)
  );

  if (isLoading) {
    return <Typography sx={{ minHeight: '195px' }}>Loading...</Typography>;
  }
  if (isError) {
    return <Typography sx={{ minHeight: '195px' }}>Error!</Typography>;
  }

  if (data) {
    onDataLoaded(Math.ceil(data.count / POKEMON_PER_PAGE));
  }

  return (
    <Grid container spacing={2}>
      {data?.results?.map((pokemon) => (
        <Grid
          key={pokemon.name}
          item
          xs={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            onClick={() => onItemClick(pokemon.url)}
            sx={{ width: '100%' }}
          >
            {pokemon.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonList;
