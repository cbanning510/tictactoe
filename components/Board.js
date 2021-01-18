import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);

  const handlePress = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
  };

  const renderSquare = (i) => {
    return <Square onPress={() => handlePress(i)} value={squares[i]} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <View>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <Button title="New Game" onPress={() => resetGame()} />
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  status: {
    marginBottom: 10,
    fontSize: 22,
  },
  boardRow: {
    flexDirection: 'row',
  },
});
