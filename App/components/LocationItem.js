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
  locationText: {
    flexGrow: 15,
    alignItems: 'flex-start',
    maxWidth: 225,
    backgroundColor: '#00FF00'
  }


});

export default (props) => {

  return (
      <View style={styles.locationText}>
      <Text>{props.marker.name}
        </Text>
      <Text style={{alignContent: 'flex-start', flexWrap: 'wrap', backgroundColor: '#474747'}}>{props.marker.address}
        </Text>
      </View>
  );
};

