import React from 'react';
import { Button , Image} from 'react-native-web';
import styled from 'styled-components/native';
import logo from './assets/logo-react-icon.png'

const Background = styled.View`
  flex: 1;
  background-color: #9EDE0B;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.Text`
  color: #8E00A8;
  text-align: center;
  font-size: 70px;
  margin: 20px;
  fontWeight: bold;
`;

const Space = styled.View `
  margin: 10px;
`;

const Texto = styled.Text`
  color: white;
  text-align: center;
  fontWeight:bold;
  font-size: 16px;
`;

const Container = styled.View `
  padding: 20px;
  background-color: #3A16DE ;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Background>
          <Title> React? </Title>
          <Image source={logo} style={{width: 500, height: 300, resizeMode: 'center', borderWidth: 6, borderRadius: 10, borderColor: 'white', backgroundColor: '#3A16DE', padding: 10}} />
          <Space></Space> 
          <Button title="Clica" color="#8E00A8" onPress={() => alert('Native!')} />
          <Space></Space> 
          <Container>
            <Texto> É isso aí React Native! </Texto>
          </Container>
    </Background>
  );
}
