import React from 'react';
import { ScrollView } from 'react-native';
import FoodCard from '../src/components/FoodCard';  

export default function Screen2({ navigation }) {
  const favoriteFoods = [
    { name: 'Carne', description: 'Delicioso alimento alto en proteinas y con un sabor espectacular.', image: require('../assets/images/carne.png') },
    { name: 'Pollo', description: 'Pollo provee al ser humano una fuente de grasas y proteinas saludables aparte de ser bueno para la salud.', image: require('../assets/images/pollo.png') },
    { name: 'Coctel', description: 'Marisco de procedencia marina el precio no es economico pero vale la pena', image: require('../assets/images/coctel.png') },
    { name: 'Pasta', description: 'Pasta italiana con salsa de tomate y queso definitivamente el mejor platillo.', image: require('../assets/images/pasta.png') },
    { name: 'Ensalada', description: 'Ensalada fresca con lechuga, tomate y pepino. Saludable bajo en calorias y bueno para bajar de peso', image: require('../assets/images/ensalada.png') },
    { name: 'Langosta', description: 'Es un platillo que consiste en una langosta preparada aveces con camaron definitivamente tiene un gran sabor y siempre lo suelo pedir cuando voy a la playa', image: require('../assets/images/langosta.png') },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      {favoriteFoods.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </ScrollView>
  );
}
