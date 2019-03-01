import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Account extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person-outline" size={30} style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <View>
        <Text> Account </Text>
      </View>
    )
  }
}

export default Account
