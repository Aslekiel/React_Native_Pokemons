import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {
  ListRenderItem,
  FlatList,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import type {SinglePokemonType} from '../../types';
import {pokemonApi} from '../../api/pokemonApi';
import PokemonsListStyles from './PokemonList.styles';

const limit = 8;

const renderItem: ListRenderItem<SinglePokemonType> = ({item}) => (
  <PokemonCard id={item.id} />
);

const PokemonsList = () => {
  const [pokemonsList, setPokemonList] = useState<SinglePokemonType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        for (
          let i = limit * (currentPage - 1) + 1;
          i < limit * (currentPage - 1) + limit + 1;
          i++
        ) {
          const res = await pokemonApi.getPokemonData(i);
          setPokemonList(prev => [...prev, res.data]);
        }
        setIsLoading(false);
        setIsFirstLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
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
        keyExtractor={item => item.name}
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
