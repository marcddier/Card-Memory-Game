import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Screen = (props) => {

  useEffect(() => {
  }, [])

  const selected = () => {
    console.log(props.prop.id)
  }

  return (
    <TouchableOpacity onPress={selected} >
      <Container>
        <Content>{props.prop.name}</Content>
      </Container>
    </TouchableOpacity>
  );
}
export default Screen;

const Container = styled.View`
  background: papayawhip;
  justify-content: center;
  align-self: center;
  border-radius: 10px;
  height: 80px;
  width: 80px;
  margin: 5px;
`

const Content = styled.Text`
  text-align: center;
`
