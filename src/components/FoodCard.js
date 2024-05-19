import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FoodCard = ({ food }) => (
  <View style={styles.card}>
    <Image source={food.image} style={styles.image} />
    <Text style={styles.name}>{food.name}</Text>
    <Text style={styles.description}>{food.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    padding: 10, 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', 
  },
  description: {
    fontSize: 16,
    color: '#666', 
  },
});

export default FoodCard;
