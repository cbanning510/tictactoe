import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Square = ({onPress, value}) => {
  return (
    <TouchableOpacity style={styles.squareContainer} onPress={() => onPress()}>
      <Text style={styles.button}>{`${value}`}</Text>
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({
  squareContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
