import {Text, SafeAreaView, TextInput, View} from 'react-native';

export default function Information(props) {

  let {name, address, description, category, rating} = props.route.params.marker[0];
  return (

    <SafeAreaView style={styles.locationText}>
      <Text> {name}
        </Text>
      <Text> {address}
        </Text>
      <Text> {description}
        </Text>
      <Text> {category}
        </Text>
      <Text> {rating}
        </Text>
    </SafeAreaView>

  )
}