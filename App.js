import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Game from './src/screens/Game'

export default function App() {

  const submit = () => {
    console.log('start pressed')
  }

  return (
    <View style={styles.container}>
      <Game />
      <Button title={'START'} onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
