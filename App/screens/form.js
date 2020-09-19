import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button
} from 'react-native';
import Field from '../components/Field.js';
import database from '../config/fire.js';
import axios from 'axios';
import API from '../config/api.js'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36454f'
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

export default class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      name: '',
      address: '',
      description: '',
      category: '',
      rating: '',
      latitude: 0,
      longitude: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAddressFromCoords = this.getAddressFromCoords.bind(this);
  }

  handleChange = (text, name) => {
    this.setState({ [name]: text }, () => console.log(this.state));
  }

  getCoordsFromAddress() {
    const addressArray = this.state.address.split(' ');
    let addressString = addressArray.join('+');
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=${API}`)
    .then(result =>
      this.setState({
        latitude: result.data.results[0].geometry.location.lat,
        longitude: result.data.results[0].geometry.location.lng
      }, () => {
        this.handleSubmit();
      })
      )
      .catch(error => alert('Invalid Address'))
    }

    async handleSubmit() {
      console.log('Passed', this.state.latitude);
      await database.ref(`O1lGo3S8LiPus2rlxlRXTIE1gyY2/locations/`)
      .push()
      .set({
        name: this.state.name,
        address: this.state.address,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        description: this.state.description,
        category: this.state.category,
        rating: this.state.rating
      });
      this.props.navigation.navigate('Map');
    }

  getAddressFromCoords(coords) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords}&key=${API}`)
      .then(result => {
        this.setState({
          address: result.data.results[0].formatted_address,
          latitude: this.props.route.params.latlng[0],
          longitude: this.props.route.params.latlng[1]
        }, () => console.log(this.state))
      })
  }

  componentDidMount() {
    // console.log(this.props.route.params)
    //convert route params here to address
    if (this.props.route.params) {
      let coords = `${this.props.route.params.latlng[0]},${this.props.route.params.latlng[1]}`
      this.getAddressFromCoords(coords);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Field name={'name'} label={'Name'} handleChange={this.handleChange} />
        <Field default={this.props.route.params ? `${this.state.address}` : ''} name={'address'} label={'Address'}  handleChange={this.handleChange} />
        <Field name={'description'} label={'Description'}  handleChange={this.handleChange} />
        <Field name={'category'} label={'Category'}  handleChange={this.handleChange} />
        <Field name={'rating'} label={'Rating'}  handleChange={this.handleChange} />
        <Button color={'#FFFDD0'} title={'Submit'} onPress={() => {
          this.props.route.params ? this.handleSubmit() : this.getCoordsFromAddress();
        }}/>

      </SafeAreaView>

    );
  }
};