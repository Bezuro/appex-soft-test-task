import { useQuery } from '@tanstack/react-query';

import { getPokemonDetails } from '../../api/api';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Pokemon } from '../../types/pokemon';

type PokemonDetailsProps = {
  url: string;
};

function PokemonDetails(props: PokemonDetailsProps) {
  const { url } = props;

  const { data, isLoading, isError } = useQuery(['pokemonDetails', url], () =>
    getPokemonDetails(url)
  );

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (isError) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={data.image} style={{ width: '400px' }} />

      <Typography mt={1}>{data.name}</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          mt: 1,
          width: '100%',
        }}
      >
        {data.abilities.map((ability) => (
          <Typography key={ability}>{ability}</Typography>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          mt: 1,
          width: '100%',
        }}
      >
        {data.types.map((type) => (
          <Typography key={type}>{type}</Typography>
        ))}
      </Box>
    </Box>
  );
}

export default PokemonDetails;
