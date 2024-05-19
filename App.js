import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet  } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
//Improtacion de componentes
import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen1">
        <Drawer.Screen  options={{ title: 'Estudiantes' }} name="Pantalla1" component={Screen1} />
        <Drawer.Screen  options={{ title: 'Comidas favoritas' }}name="Pantalla2" component={Screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
