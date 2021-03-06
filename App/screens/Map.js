import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import database from '../config/fire.js';
import { useIsFocused } from '@react-navigation/native';
import CustomCallout from '../components/CustomCallout.js';
import MapStyle from '../config/mapStyle.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      markers: []
    }

    this.getMarkers = this.getMarkers.bind(this)
    this.centerCurrentLocation = this.centerCurrentLocation.bind(this)
  }

  componentDidMount() {

    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // The screen is focused, Call any action
      navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords;
        this.setState({
          region: {
            //grabbing coordinates of your current position
            latitude: latitude,
            longitude: longitude,
            //delta determines how zoomed into the map you want
            latitudeDelta: 0.009,
            longitudeDelta: 0.004
          }
        })
         //if current location cannot be determined, use this location
      }, () => {
        this.setState({
          region: {
            latitude: 33.5304393,
            longitude: -86.69327919999999,
            latitudeDelta: 100,
            longitudeDelta: 100
          }
        })
      });
      //retrieves existing locations from database
      this.getMarkers();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  centerCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      let { latitude, longitude } = position.coords;
      this.setState({
        region: {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004
        }
      })
    })
  }

  async getMarkers() {
    let locations = [];
    //read from one particular user's database
    await database.ref('O1lGo3S8LiPus2rlxlRXTIE1gyY2/')
      .once('value')
      .then(function (snapshot) {
        let result = snapshot.val();
        for (let id in result.locations) {
          let location = result.locations[id];
          location.id = id;
          locations.push(location);
        }
      })
    this.setState({ markers: locations });
  }

  render() {
    return (

      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.push("Form")}>
            <Entypo name="plus" size={32} color="#4B7579" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Locations", {
              markers: this.state.markers,
              })}>
            <Entypo name="list" size={32} color="#4B7579" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.centerCurrentLocation()}>
            <Entypo name="location-pin" size={32} color="#4B7579" />
        </TouchableOpacity>
        </SafeAreaView>

      {!this.state.region.latitude
      ? <View />
      :
        <MapView
          //mapStyle used for customizing map on Google phones https://mapstyle.withgoogle.com/
          style={styles.mapStyle}
          region={this.state.region}
          customMapStyle={MapStyle}
          onLongPress={(e) => this.props.navigation.navigate("Form", {
              latlng: [e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude]
              })}>
          {this.state.markers.map((marker, i) => {
            return (
              <Marker
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                key={i}
              >
                <Callout tooltip={true} style={styles.callout}>
                  <View>
                    <Text style={styles.calloutTitle}>{marker.name}</Text>
                    <Text style={styles.calloutAdd}>{marker.address}</Text>
                  </View>
                </Callout>
              </Marker >
            )
          })}
        </MapView>
      }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    marginHorizontal: 20,
    borderColor: '#ff0000'
  },
  calloutTitle: {
    fontWeight: 'bold',
    color: '#FFFDD0'
  },
  calloutAdd: {
    color: '#FFFDD0'
  },
  callout: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#36454f',
    borderRadius: 10,
    zIndex: 10,
    padding: 10
  }
});