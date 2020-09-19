import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView
} from 'react-native';


const styles = StyleSheet.create({
  fieldContainer: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  textInput: {
    fontSize: 16
  }

});

export default (props) => {

  return (
    <View style={styles.fieldContainer}>
      <TouchableOpacity style={styles.row}>
        <TextInput
          defaultValue={props.default}
          name={props.name}
          style={styles.textInput}
          placeholder={props.label}
          onChangeText={(text) => props.handleChange(text, props.name)}
        />
      </TouchableOpacity>
    </View>
  );
};


