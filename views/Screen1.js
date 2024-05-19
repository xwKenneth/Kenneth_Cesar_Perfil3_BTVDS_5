import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

import CardDisplay from '../src/components/CardDisplay';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <CardDisplay
        label_nombre="Kenneth Iván Ramos Majano"
        label_carnet="20220094"
        pic_display={require('../assets/images/kenneth.png')}
      />
      <CardDisplay
        label_nombre="César Andrés López Valdez"
        label_carnet="20190156"
        pic_display={require('../assets/images/cesar.png')}
      />
    </View>
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
