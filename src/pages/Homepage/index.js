import React from 'react';

import {Container, ContainerWelcome, WelcomeText, Title, IconButton} from './styles';

const Homepage = () => {
    return (
     <Container>

     <ContainerWelcome>
      <WelcomeText>Olá, Jeovana :)</WelcomeText>
      <Title>O que você vai aprender hoje?</Title>

      <IconButton/>
     </ContainerWelcome>

     {/* <SearchInput/> */}

    </Container>
  );
};

export default Homepage;
