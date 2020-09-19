import React, {useState} from 'react';
//import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import database from '../config/fire.js';
import LocationItem from '../components/LocationItem.js';
//import { useIsFocused } from '@react-navigation/native';
//import CustomCallout from '../components/CustomCallout.js';
//import MapStyle from '../config/mapStyle.js'



export default function Locations(props) {

  let  [temp,setState]=useState(0);
  function handleUpdate() {
    console.log('before inside handleupdate', temp);
    setState(55);
    console.log('after inside handleupdate', temp);
  }


  return (

   <ScrollView>
     {props.route.params.markers.map((marker, i) =>
       <View key={i}>
         <LocationItem marker={marker} handleUpdate={handleUpdate} />
       </View>
     )}
   </ScrollView>
  )
}


