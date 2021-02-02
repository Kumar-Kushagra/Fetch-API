import React, { useState } from 'react';
import { Text,View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const FetchAPI = async () => {
    await fetch('https://dodbnb.herokuapp.com/api/v1/auth/register', {
      method: 'POST',
      headers: ({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }),
    })
      .then((response) => response.json())
      .then (response => console.log (response) )
      
      .catch((error) => console.error(error))
  }
  return (
    <SafeAreaView>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter FirstName"
          placeholderTextColor="black"
          onChangeText={(text) => setFirstName(text)} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Last Name"
          placeholderTextColor="black"
          onChangeText={(text) => setLastName(text)} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email or Username"
          placeholderTextColor="black"
          onChangeText={(text) => setEmail(text)} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Password"
          placeholderTextColor="black"
          onChangeText={(text) => setPassword(text)} />
      </View>
      <View style={{ top: 20, width: "33%", backgroundColor: "lightgreen", alignSelf: "center", alignItems: "center", borderRadius: 50, borderWidth: 1 }}>
        <TouchableOpacity onPress = { ()=> FetchAPI()}>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  inputView: {
    width: "80%",
    margin: 25,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 2,
    height: 50
  },
  signup: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25
  },
});

export default App