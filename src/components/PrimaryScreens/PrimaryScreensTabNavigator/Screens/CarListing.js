import React, { Component } from 'react'
import { Text, View,ScrollView, TouchableOpacity } from 'react-native'
import Card from './common/Card'
import car1 from '../../../../assets/car1.jpg'
import car2 from '../../../../assets/car2.jpg'
import car3 from '../../../../assets/car3.jpg'
import car4 from '../../../../assets/car4.jpg'
import Icon from 'react-native-vector-icons/Entypo'



class CarListing extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="text-document" size={25} style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor: '#dddddd'}}>
        <View style={{margin: 15, marginTop: 50, flexDirection: 'row',justifyContent: 'space-between'}}>
              <View style={{marginTop: 5}}>
                <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}>
                  <View>   
                    <View style={{borderBottomWidth: 5, borderBottomColor: "orange" ,width: 40}}>
                      </View>
                      <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "orange" ,width: 30}}>
                      </View>
                      <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "orange" ,width: 20}}>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.5,borderRadius: 30, padding: 10,backgroundColor: '#fff',marginBottom: 5}}>
                 <TouchableOpacity>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18,fontWeight: 'bold'}}>FILTERS</Text>
                 </TouchableOpacity>
              </View> 
                
        </View>
       <View style={{marginHorizontal: 8}}>
         <Card image = {car1} />
         <Card image = {car2} />
         <Card image = {car3} />
         <Card image = {car4} />
         <Card image = {car1} />

         
       </View>

      </ScrollView>
    )
  }
}

export default CarListing
