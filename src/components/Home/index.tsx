import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import PokemonList from '../PokemonList';
import PokemonPagination from '../PokemonPagination';
import PokemonDetails from '../PokemonDetails';

function Home() {
  const [url, setUrl] = useState('');
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onItemClick = (url: string) => {
    setUrl(url);
    setIsPokemonSelected(true);
  };

  const onDataLoaded = (pageCount: number) => {
    setPageCount(pageCount);
  };

  return (
    <Container maxWidth="xl">
      <Grid mt={4} container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{ p: 3, minHeight: '700px' }}>
            <PokemonList
              currentPage={currentPage}
              onItemClick={onItemClick}
              onDataLoaded={onDataLoaded}
            />

            <Box mt={2}>
              <PokemonPagination
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {isPokemonSelected && (
            <Paper sx={{ p: 3, minHeight: '700px' }}>
              <PokemonDetails url={url} />
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
