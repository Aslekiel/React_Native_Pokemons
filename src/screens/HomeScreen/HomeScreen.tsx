import React from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/pokemon-logo.png')}
        style={styles.logo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    maxWidth: '50%',
    maxHeight: '20%',
  },
});

export default HomeScreen;
