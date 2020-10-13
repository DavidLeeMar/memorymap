import React, {useState} from 'react';
//import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import database from '../config/fire.js';
import LocationItem from '../components/LocationItem.js';
//import { useIsFocused } from '@react-navigation/native';
//import CustomCallout from '../components/CustomCallout.js';
//import MapStyle from '../config/mapStyle.js'

const styles = StyleSheet.create({
  fieldContainer: {
    backgroundColor: '#36454f',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20
  },
  deleteIcon: {
    flexGrow: 1,
    alignItems: 'center',
  },
  locationText: {
    flexGrow: 15,
    alignItems: 'flex-start',
    maxWidth: 225,
    backgroundColor: '#474747'
  },
  arrowIcon: {
    flexGrow: 1,
    alignItems: 'flex-end',
  }
});

export default class Locations extends React.Component{

  constructor(props) {
    super(props)

    this.deleteItem = this.deleteItem.bind(this)
  }

  async deleteItem(id) {
    await database.ref(`O1lGo3S8LiPus2rlxlRXTIE1gyY2/locations/${id}`).set(null, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Data Deleted successfully!');
      }
    });
  }

  render() {
    return (

      <ScrollView>
        {this.props.route.params.markers.map((marker, i) =>
          <View key={i} style={styles.fieldContainer}>

            {//<TouchableOpacity onPress={() => this.deleteItem(marker.id)} style={styles.deleteIcon}>
            //<Entypo name="circle-with-cross" size={32} color="#4B7579" />
            //</TouchableOpacity>
            }
            <LocationItem marker={marker} style={styles.locationText}/>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("Information", { marker: [marker] })} style={styles.arrowIcon}>
              <Entypo name="chevron-right" size={32} color="#4B7579" />
            </TouchableOpacity>

          </View>
        )}
      </ScrollView>
    )
  }
}


