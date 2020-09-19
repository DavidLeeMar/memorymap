import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import database from '../config/fire.js';



const styles = StyleSheet.create({
  fieldContainer: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  textInput: {
    fontSize: 16
  },
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

export default (props) => {

  function deleteItem(id) {
    database.ref(`O1lGo3S8LiPus2rlxlRXTIE1gyY2/locations/${id}`).set(null, function(error) {
      if (error) {
        console.log(error);
      } else {
        props.handleUpdate();
        console.log('Data Deleted successfully!');
      }
    });
  }


  return (
    <View style={styles.fieldContainer}>
      <TouchableOpacity onPress={() => deleteItem(props.marker.loc)} style={styles.deleteIcon}>
        <Entypo name="circle-with-cross" size={32} color="#4B7579" />
      </TouchableOpacity>
      <View style={styles.locationText}>
      <Text> {props.marker.name}
        </Text>
      <Text style={{alignContent: 'flex-start', flexWrap: 'wrap'}}> {props.marker.address}
        </Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Information", {marker: [props.marker]})}  style={styles.arrowIcon}>
        <Entypo name="chevron-right" size={32} color="#4B7579" />
      </TouchableOpacity>

    </View>
  );
};

