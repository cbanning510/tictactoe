import React from 'react';
import {StyleSheet, View} from 'react-native';
import Board from './components/Board';

const App = () => {
  return (
    <View style={styles.game}>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
