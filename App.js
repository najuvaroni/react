import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [click, setClick] = useState(0);

  const QuandoClicar = () => {
    setClick(click + 1);
  };
  const Remover = () =>{
    setClick(click - 1)
  }

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Senai</Text>

        <Button
            style={styles.btt}
            title={`Clique aqui (${click} vezes)`}
            onPress={QuandoClicar}
        />
        <Button
            style={styles.btt}
            title={`Clique aqui para remover)`}
            onPress={Remover}
        />

        <Text style={styles.clickText}>{`Você clicou ${click} vezes`}</Text>

        <StatusBar style="light" backgroundColor={'red'} translucent={false} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'pink',
  },
  btt: {
    backgroundColor: 'pink',
  },
  clickText: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});
