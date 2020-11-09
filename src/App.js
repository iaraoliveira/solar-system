import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#151515" barStyle="light-content" />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
