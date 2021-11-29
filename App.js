import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default function App() {
  const [name, setName] = React.useState('')
  const [names, setNames] = React.useState([])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button title="Add" onPress={() => setNames([...names, name])} />

      {names.length > 0 && names.map((item) => <Text key={item}>{item}</Text>)}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
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
})
