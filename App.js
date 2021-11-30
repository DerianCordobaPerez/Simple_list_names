import React, {useEffect, useState} from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'

export default function App() {
  const [personasArray, setPersonasArray] = React.useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setPersonasArray(data))
  }, [])

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Personas</Text>

      {personasArray.map((persona, index) => (
        <View key={index} style={styles.persona}>
          <Text>{persona.name}</Text>
          <Text>{persona.username}</Text>
          <Text>{persona.email}</Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  persona: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
})
