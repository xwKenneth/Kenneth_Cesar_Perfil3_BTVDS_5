import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({ nombre, carnet, imagen }) => (
  <View style={styles.card}>
    <Image style={styles.imagen} source={imagen} />
    <Text style={styles.nombre}>{nombre}</Text>
    <Text style={styles.carnet}>{carnet}</Text>
  </View>
);

 
export default function CardDisplay({label_nombre, label_carnet, pic_display }) {
  return(
  <>
    <View style={styles.container}>
      <Card nombre={label_nombre} carnet={label_carnet} imagen={pic_display} />
    </View>
  </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
  },
  imagen: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  carnet: {
    fontSize: 20,
  },
});