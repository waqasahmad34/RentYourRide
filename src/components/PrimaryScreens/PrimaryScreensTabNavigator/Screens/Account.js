import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Account extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person-outline" size={30} style={{color: tintColor,borderRadius: 25, padding: 10,backgroundColor: 'rgba(58,175,169,1)'}} />
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
