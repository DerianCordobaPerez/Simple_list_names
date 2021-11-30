import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default function App() {
  const [persona, setPersona] = React.useState({
    nombre: '',
    apellido: '',
    edad: 0,
  })

  const [personasArray, setPersonasArray] = React.useState([])

  const handleChange = (nombre, valor) => {
    setPersona({
      ...persona,
      [nombre]: valor,
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Add person</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(valor) => handleChange('nombre', valor)}
        value={persona.nombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        onChangeText={(valor) => handleChange('apellido', valor)}
        value={persona.apellido}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        onChangeText={(valor) => handleChange('edad', valor)}
        value={persona.edad}
      />

      <Button
        title="Add person"
        onPress={() => {
          setPersonasArray([...personasArray, persona])
          setPersona({
            nombre: '',
            apellido: '',
            edad: 0,
          })
        }}
      />

      <Text style={styles.texto}>Personas</Text>

      {personasArray.map((persona, index) => (
        <View key={index} style={styles.persona}>
          <Text>{persona.nombre}</Text>
          <Text>{persona.apellido}</Text>
          <Text>{persona.edad}</Text>
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
