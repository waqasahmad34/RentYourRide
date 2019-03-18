import React, { Component } from 'react'
import { Text, View, Image,Dimensions } from 'react-native'


const {width,height} = Dimensions.get('window')
class SingleCarImageSlider extends Component {
  render() {
    return (
      <View style={{elevation: 15,height: 250,
      width: width - 40,padding: 5,backgroundColor: '#fff',borderColor: '#fff'}}>
        
        <Image style={{height: null, borderRadius: 20, width: null,flex: 1,resizeMode: 'cover'}} source={this.props.img}/>
        
        
      </View>
    )
  }
}

export default SingleCarImageSlider
