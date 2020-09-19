import React from 'react';
import {StyleSheet, Text, SafeAreaView, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36454f',
    borderRadius: 10,
    margin: 10,
    padding: 20
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    padding: 10,
    paddingBottom: 20
  },
  name: {
    fontWeight: 'bold',
    color: '#FFFDD0',
    fontSize: 20,
    padding: 10
  },
  title: {
    color: '#FFFDD0',
    fontSize: 25,
    fontWeight: 'bold'
  }

});

export default function Information(props) {

  let {name, address, description, category, rating} = props.route.params.marker[0];
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.title}>Address</Text>
      <Text style={styles.text}>{address}</Text>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.title}>Category</Text>
      <Text style={styles.text}>{category}</Text>
      <Text style={styles.title}>Rating</Text>
      <Text style={styles.text}>{rating}</Text>
    </View>

  )
}