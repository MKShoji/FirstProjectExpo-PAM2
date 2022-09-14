import React from 'react';
import { Button } from 'react-native-web';
import styled from 'styled-components/native';

const Background = styled.View`
  flex: 1;
  background-color: #9EDE0B;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 30px;
  margin: 20px;
`;

export default function App() {
  return (
    <Background>
        <Title> React? </Title>
        <Button title="Clica" color="#8E00A8" onPress={() => alert('Native!')} />
    </Background>
  );
}
