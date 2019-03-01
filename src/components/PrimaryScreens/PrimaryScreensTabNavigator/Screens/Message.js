import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

class Message extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="download" size={25} style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <View>
        <Text> Message </Text>
      </View>
    )
  }
}

export default Message
