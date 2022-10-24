export type PokemonsApiType = {
  pokemons: SinglePokemonType[];
  pagination: PaginationType;
};

export type PaginationType = {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: PaginationResultsType[];
};

export type PaginationResultsType = {
  name: string;
  url: string;
};

export type SinglePokemonType = {
  id: string;
  name: string;
  height: number;
  weight: number;
  abilities: AbilitiesType[];
  sprites: SpritesType;
  base_experience: number;
  stats: PokemonStatsType[];
  types: PokemonTypesType[];
};

export type AbilitiesType = {
  is_hidden: boolean;
  slot: number;
  ability: AbilitiesArrayType;
};

export type AbilitiesArrayType = {
  name: string;
  url: string;
};

export type PokemonStatsType = {
  base_stat: number;
  stat: StateType;
};

export type StateType = {
  name: string;
};

export type SpritesType = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type PaginationOptionsType = {
  offset: number;
  limit: number;
};

export type PokemonTypesType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type BottomTabParamList = {
  Home: undefined;
  Pokemons: undefined;
  Profile: undefined;
  Login: undefined;
};

export type StackParamsType = {
  PokemonsList: undefined;
  SinglePokemonPage: undefined;
  UserProfile: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type RootParamsType = {
  SinglePokemonPage: object;
  Login: undefined;
  SignUp: undefined;
};
