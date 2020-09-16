import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import { Entypo } from'@expo/vector-icons';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.push("Form")}>
            <Entypo name="plus" size={32} color="#3D777A" />
          </TouchableOpacity>
        </SafeAreaView>

        <MapView style={styles.mapStyle} />

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