import React, { useEffect, useState } from 'react';
import type { ListRenderItem } from 'react-native';
import {
  FlatList,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import type { SinglePokemonType } from 'src/types';

import PokemonCard from 'src/components/PokemonCard';

import usePokemons from 'src/hooks/usePokemons';

import PokemonsListStyles from './PokemonList.styles';

const limit = 8;

const renderItem: ListRenderItem<SinglePokemonType> = ({ item }) => (
  <PokemonCard id={item.id} />
);

const PokemonsList = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { pokemonsList, getPokemonsArray } = usePokemons();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        await getPokemonsArray(limit, currentPage);

        setIsLoading(false);
        setIsFirstLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const loadMorePokemons = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={PokemonsListStyles.loading}>
        <ActivityIndicator size="large" color="rgba(175, 47, 47, 0.55)" />
      </View>
    ) : null;
  };

  return isFirstLoading ? (
    <View style={PokemonsListStyles.firstLoading}>
      <ActivityIndicator size="large" color="rgba(175, 47, 47, 0.55)" />
    </View>
  ) : (
    <SafeAreaView>
      <FlatList
        data={pokemonsList}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={PokemonsListStyles.container}
        refreshing={isLoading}
        onEndReached={loadMorePokemons}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderLoader}
      />
    </SafeAreaView>
  );
};

export default PokemonsList;
