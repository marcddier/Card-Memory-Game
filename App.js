import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Game from './src/screens/Game'

import { Stopwatch } from 'react-native-stopwatch-timer';

export default function App() {

  const [ready, setReady] = useState(null);
  const [timer, setTimer] = useState({
    isStart: false,
  })

  const startGame = () => {
    setReady(true);
    setTimer({ isStart: !timer.isStart });
  }

  const getFormattedTime = (time) => {
    this.currentTime = time;
  }

  return (
    <View style={styles.container}>
      {ready ? (
        <View style={{alignItems: "center"}}>
          <Stopwatch
            laps
            start={timer.isStart}
            options={{backgroundColor: "#FFF", fontSize: 30}}
            getTime={getFormattedTime}
          />
          <Game />
        </View>
      ): (
        <View style={{alignItems: "center"}}>
          <Text>
            Find the pair to win and try to do the best time
          </Text>
        </View>
      )}
      <Button title={'START'} onPress={startGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
