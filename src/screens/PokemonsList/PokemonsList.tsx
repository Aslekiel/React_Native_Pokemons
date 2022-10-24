import React, {useEffect, useState} from 'react';
import PokemonCard from './components/PokemonCard';
import {
  ListRenderItem,
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import type {SinglePokemonType} from '../../types';
import {useAppDispatch} from '../../store/hooks/hooks';
import {setPokemons} from '../../store/pokemons/pokemons';
import {pokemonApi} from '../../api/pokemonApi';

const limit = 8;

const renderItem: ListRenderItem<SinglePokemonType> = ({item}) => (
  <PokemonCard id={item.id} />
);

const PokemonsList = () => {
  const [pokemonsList, setPokemonList] = useState<SinglePokemonType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

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

  useEffect(() => {
    if (pokemonsList.length / currentPage === 8) {
      dispatch(setPokemons(pokemonsList));
    }
  }, [currentPage, dispatch, pokemonsList]);

  const loadMorePokemons = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="rgba(175, 47, 47, 0.55)" />
      </View>
    ) : null;
  };

  return isFirstLoading ? (
    <View style={styles.firstLoading}>
      <ActivityIndicator size="large" color="rgba(175, 47, 47, 0.55)" />
    </View>
  ) : (
    <FlatList
      data={pokemonsList}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      contentContainerStyle={styles.container}
      refreshing={isLoading}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.2}
      ListFooterComponent={renderLoader}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  firstLoading: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loading: {
    paddingVertical: 20,
  },
});

export default PokemonsList;
