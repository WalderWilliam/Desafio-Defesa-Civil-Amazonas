import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { api } from '../../api'

import * as Animatable from 'react-native-animatable'

export default function UserList({route}) {
  const [repositories, setRepositories] = useState([])
  
  const {userName} = route.params

  const fetchRepositories = async () => {
    try {
      const { data } = await api.get(`users/${userName}/repos`)
      setRepositories(data)
    } catch (error) {
      setRepositories ([])
    }
  }
  const mountItem = () => {
    if (repositories.length === 0) {
      return <Text>Sem Repositorios</Text>
    }
    const itens = repositories.map(repository => {
      return <Text key={repository.name}> {repository.name} </Text>
    })
    return itens
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={500}
        animation="fadeInLeft"
        style={styles.containerHeader}
      >
        <Text style={styles.message}>{userName}</Text>
      </Animatable.View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        {mountItem()}
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

  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  }
})
