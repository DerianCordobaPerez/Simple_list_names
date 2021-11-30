import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default function App() {
  const [person, setPerson] = React.useState({
    name: '',
    lastname: '',
    age: '',
  })

  const [personArray, setPersonArray] = React.useState([])

  const handleChange = (name, value) => {
    setPerson({
      ...person,
      [name]: value,
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add person</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(value) => handleChange('name', value)}
        value={person.name}
      />

      <TextInput
        style={styles.input}
        placeholder="Lastname"
        onChangeText={(value) => handleChange('lastname', value)}
        value={person.lastname}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(value) => handleChange('age', value)}
        value={person.age}
      />

      <Button
        title="Add person"
        onPress={() => {
          setPersonArray([...personArray, person])
          setPerson({
            name: '',
            lastname: '',
            age: '',
          })
        }}
      />

      <Text style={styles.text}>Persons</Text>

      {personArray.map((person, index) => (
        <View key={index} style={styles.person}>
          <Text>{person.name}</Text>
          <Text>{person.lastname}</Text>
          <Text>{person.age}</Text>
        </View>
      ))}

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

  person: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
})
