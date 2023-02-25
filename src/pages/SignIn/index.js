import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={500}
        animation="fadeInLeft"
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a) 😎</Text>
        <Text style={styles.second}>
          Para continuarmos digite a sua conta do GitHub e a senha:
        </Text>
      </Animatable.View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Conta</Text>
        <TextInput
          placeholder="Digite a sua conta do GitHub aqui"
          style={styles.input}
          onChangeText={input => {
            setUserName(input)
          }}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="A senha será 'desafio2023'"
          style={styles.input}
          onChangeText={input => {
            setPassword(input)
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (password !== 'desafio123') {
              console.log('Senha Incorreta')
              return
            }
            navigation.navigate('UserList', { userName: userName })
          }}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D265C'
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },

  second: {
    fontSize: 18,
    paddingtop: 5,
    paddingRight: 5,
    color: '#fff'
  },

  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title: {
    fontSize: 20,
    marginTop: 28
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  button: {
    backgroundColor: '#E6580E',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
