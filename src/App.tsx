import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { getPokemonList, getPokemonDetails } from './api/api';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>
  );
}

function Test() {
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

  return <div>asd</div>;
}

export default App;
