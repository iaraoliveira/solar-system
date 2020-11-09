import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from '../pages/Homepage';
import Welcome from '../pages/Welcome';

const App = createStackNavigator();

const Routes = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Homepage" component={Homepage} />
    </App.Navigator>
  );
};

export default Routes;
