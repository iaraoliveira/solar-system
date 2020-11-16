import React from 'react';
// import { Text } from 'react-native';

import BackgroundImage from '../../assets/backgrounds/background-solar-system.svg';
import ForwardIcon from '../../assets/icons/forward.svg';
// import { SvgUri } from 'react-native-svg';

import {Container, TextContainer, Title, Subtitle, Span, Button, TextButton, IconButton} from './styles';

const Homepage = ({ navigation }) => {

  const handleStart = () => {
    navigation.navigate('Homepage');
  }

  return (
      <Container>
        <BackgroundImage style={{flex:1, position:'absolute'}}/>

        <TextContainer>
          <Subtitle>Aperte o cinto</Subtitle>
          <Title>Comece sua jornada pelo sistema solar</Title>
        </TextContainer>

          <Span>Pronto para a decolagem?</Span>

          <Button onPress={()=> handleStart()}>
            <TextButton>Começar agora</TextButton>
            <IconButton/>
          </Button>

      </Container>
  );
};

export default Homepage;
