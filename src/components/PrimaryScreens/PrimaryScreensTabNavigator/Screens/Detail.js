import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

class Detail extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="text-document" size={25} style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <View>
        <Text> Detail </Text>
      </View>
    )
  }
}

export default Detail
