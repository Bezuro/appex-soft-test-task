import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type PokemonListProps = {
  pokemons?: { name: string; url: string }[];
  onItemClick: (url: string) => void;
};

function PokemonList(props: PokemonListProps) {
  const { pokemons, onItemClick } = props;

  return (
    <Grid container spacing={2}>
      {pokemons?.map((pokemon) => (
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
