import React from 'react';
import {StyleSheet, Text, SafeAreaView, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  deleteIcon: {
    flexGrow: 1,
    alignItems: 'center'
  },
  locationText: {
    flexGrow: 15,
    alignItems: 'flex-start',
    maxWidth: 225
  },
  arrowIcon: {
    flexGrow: 1,
    alignItems: 'flex-end'
  }
});

export default function Information(props) {

  let {name, address, description, category, rating} = props.route.params.marker[0];
  return (

    <SafeAreaView style={styles.locationText}>
      <Text> {name}
        </Text>
      <Text> {address}
        </Text>
      <Text> {description}
        </Text>
      <Text> {category}
        </Text>
      <Text> {rating}
        </Text>
    </SafeAreaView>

  )
}