import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D777A'
  },
  fieldContainer: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    marginHorizontal: 20
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  textInput: {
    fontSize: 16
  }

});

export default () => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.fieldContainer}>
        <TouchableOpacity style={styles.row}>
          <TextInput style={styles.textInput} placeholder = "Name"/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};

