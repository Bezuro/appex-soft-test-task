export interface Pokemon {
  id: number;
  name: string;
  image: string;
  abilities: string[];
  types: string[];
}

export interface PokemonList {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}
