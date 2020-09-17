import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import { Entypo } from'@expo/vector-icons';
import database from '../config/fire.js';
import { useIsFocused } from '@react-navigation/native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 34.020922764606034,
        longitude: -118.39458514004946,
        latitudeDelta: .005,
        longitudeDelta: .005
      },
      markers: []
    }
    this.markedIt = this.markedIt.bind(this)
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log("I'll tumble fooor ya")
    });
  }

  markedIt(e) {
    let newMarkers = this.state.markers;
    newMarkers.push({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      // title: "This App's Name Is",
      // description: "püpr"
    })
    this.setState({
      markers: newMarkers
    })
  }






  render() {


      // This hook returns `true` if the screen is focused, `false` otherwise


      // database.ref('O1lGo3S8LiPus2rlxlRXTIE1gyY2/')
      //   .once('value')
      //   .then(function(snapshot) {
      //     console.log(snapshot.val())
      //   });


    return (

      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.push("Form")}>
            <Entypo name="plus" size={32} color="#4B7579" />
          </TouchableOpacity>
        </SafeAreaView>

        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          onLongPress={(e) => this.markedIt(e)}>
          {this.state.markers.map((marker, i) => {
            return (
              <Marker
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                key={i}
              >
                {//<Callout tooltip={true}>
                 // <CustomCallout />
                 //</Callout>
                }
              </Marker >
            )
          })}
        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    borderColor: '#ff0000'
  }
});