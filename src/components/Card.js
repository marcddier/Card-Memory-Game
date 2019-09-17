import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

const Screen = (props) => {

  return (
    <View>
      {props.visible == "hidden" ?
        <Content>{props.value.name}</Content>
      : 
        <Content>{props.value.value}</Content>
      }
    </View>
  );
}
export default Screen;

const Content = styled.Text`
  text-align: center;
`
