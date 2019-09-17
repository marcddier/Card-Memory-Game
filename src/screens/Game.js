import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';

const list = [{id: 1, value: "a", name: "1", display: "hidden"},{id: 2, value: "a", name: "2", display: "hidden"},{id: 3, value: "b", name: "3", display: "hidden"},
              {id: 4, value: "b", name: "4", display: "hidden"},{id: 5, value: "c", name: "5", display: "hidden"},{id: 6, value: "c", name: "6", display: "hidden"},
              {id: 7, value: "d", name: "7", display: "hidden"},{id: 8, value: "d", name: "8", display: "hidden"},{id: 9, value: "e", name: "9", display: "hidden"},
              {id: 10, value: "e", name: "10", display: "hidden"},{id: 11, value: "f", name: "11", display: "hidden"},{id: 12, value: "f", name: "12", display: "hidden"},
              {id: 13, value: "g", name: "13", display: "hidden"},{id: 14, value: "g", name: "14", display: "hidden"},{id: 15, value: "h", name: "15", display: "hidden"},
              {id: 16, value: "h", name: "16", display: "hidden"},{id: 17, value: "i", name: "17", display: "hidden"},{id: 18, value: "i", name: "18", display: "hidden"},
              {id: 19, value: "j", name: "19", display: "hidden"},{id: 20, value: "j", name: "20", display: "hidden"}]

const Screen = () => {

  const [selectedCard, setSelectedCard] = useState(null)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  useEffect( () => {
    console.log(selectedCard)
    let temp = selectedCard;
    if (selectedCard != null) {
      temp.display = "visible";
    }
    if (firstCard == null) {
      setFirstCard(temp)
    } else if (secondCard == null) {
      setSecondCard(temp)
    }
  }, [selectedCard]); 

  useEffect(() => {
    // console.log(firstCard)
    // console.log(secondCard)
    if (secondCard !== null){
      if (firstCard.value == secondCard.value) {
        // eliminated
        console.log("yeah")
      } else {
        // hidden
        console.log('han')
      }
      setFirstCard(null)
      setSecondCard(null)
    }
  }, [secondCard])

  return (
    <Container>
      <FlatList 
        data={list}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {
              setSelectedCard(item)
            }} >
              <ContainerCard>
                <Card visible={item.display} value={item} key={Math.random()} />
              </ContainerCard>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
        numColumns={4}
      />
    </Container>
  );
}
export default Screen;

const Container = styled.View`
  display: flex;
  flex: 1;
`
const ContainerCard = styled.View`
  background: papayawhip;
  justify-content: center;
  align-self: center;
  border-radius: 10px;
  height: 80px;
  width: 80px;
  margin: 5px;
`
const ContentCard = styled.Text`
  text-align: center;
`

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    borderWidth: 1, 
    borderColor: 'black',
    backgroundColor: '#EE82EE',
    width: 75,
    height: 125,
    margin: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    backgroundColor: 'white',
    position: 'absolute',
    backfaceVisibility: 'hidden'
  }
});
