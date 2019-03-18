import React, { Component } from 'react'
import { Text, Image ,View , TouchableOpacity,ScrollView } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import CarImage from '../../assets/car3.jpg'
import {Thumbnail} from 'native-base'
import ChevronIcon from 'react-native-vector-icons/Entypo'


class RentalRequests extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'rgba(247,243,247,1)',flex: 1}}>
        <View style={{marginTop: 15}}>
           <View style={{position: 'absolute',padding: 7,left: 20}}>
                <TouchableOpacity>
                  <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                </TouchableOpacity>
           </View>
           <View style={{marginLeft: 10,marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
            
              <Text style={{alignSelf: 'center',fontSize: 20,color: 'rgba(92,92,92,1)'}}>RENTALS REQUEST</Text>
              
           </View>
        </View>
        <ScrollView>
        <View style={{marginTop: 50,marginHorizontal: 10}}>
            
                <View style={{backgroundColor: '#fff',marginBottom: 20, borderRadius: 20,height: 220,flexWrap: 'wrap'}}>
                    <View style={{margin: 15}}>
                        
                      <View style={{flexDirection: 'row'}}>
                        <View style={{}}>
                            <Thumbnail large source={CarImage}/>
                        </View>
                        <View style={{paddingTop: 15,padding: 5}}>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={{color: 'rgba(92,92,92,1)',fontSize: 16,fontWeight: '500'}}>Joe Mackenzie</Text>
                              <ChevronIcon name='chevron-small-right' color='rgba(92,92,92,1)' size={24}/>
                            </View>
                            <Text style={{color: 'rgba(184,184,184,1)',fontSize: 12}}>WANTS TO RENT YOUR <Text  style={{color: 'rgba(76,182,177,1)',fontSize: 12}}>TOYOTA COROLLA</Text></Text>
                        </View>
                      </View>
                    </View>


                    <View style={{borderRadius: 20,padding: 10,borderWidth: 1,borderColor: 'rgba(255,187,46,1)',borderStyle: 'dashed',marginHorizontal: 15,backgroundColor: 'rgba(255,187,46,0.29)'}}>
                      <Text style={{color: 'rgba(255,172,0,1)',alignSelf: 'center'}}>From Jan 24th 1:00PM - Feb 11th 2:00PM</Text>
                    </View>

                   <View style={{marginTop: 12, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                    <View style={{borderRadius: 10,flex: 0.5,padding: 10,marginHorizontal: 15,backgroundColor: 'rgba(216,216,216,1)'}}>
                      <Text style={{color: 'rgba(92,92,92,1)',alignSelf: 'center'}}>Deny Request</Text>
                    </View>

                    <View style={{borderRadius: 10,flex: 0.5,padding: 10,marginHorizontal: 15,backgroundColor: 'rgba(76,182,177,1)'}}>
                      <Text style={{color: '#fff',alignSelf: 'center'}}>Rent Your Ride</Text>
                    </View>

                   </View>

                </View>
           
        </View>

        <View style={{marginTop: 5,marginHorizontal: 10}}>
            
                <View style={{backgroundColor: '#fff',marginBottom: 20, borderRadius: 20,height: 220,flexWrap: 'wrap'}}>
                    <View style={{margin: 15}}>
                        
                      <View style={{flexDirection: 'row'}}>
                        <View style={{}}>
                            <Thumbnail large source={CarImage}/>
                        </View>
                        <View style={{paddingTop: 15,padding: 5}}>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={{color: 'rgba(92,92,92,1)',fontSize: 16,fontWeight: '500'}}>Lil Jon</Text>
                              <ChevronIcon name='chevron-small-right' color='rgba(92,92,92,1)' size={24}/>
                            </View>
                            <Text style={{color: 'rgba(184,184,184,1)',fontSize: 12}}>WANTS TO RENT YOUR <Text  style={{color: 'rgba(76,182,177,1)',fontSize: 12}}>TOYOTA COROLLA</Text></Text>
                        </View>
                      </View>
                    </View>


                    <View style={{borderRadius: 20,padding: 10,borderWidth: 1,borderColor: 'rgba(255,187,46,1)',borderStyle: 'dashed',marginHorizontal: 15,backgroundColor: 'rgba(255,187,46,0.29)'}}>
                      <Text style={{color: 'rgba(255,172,0,1)',alignSelf: 'center'}}>From Jan 24th 1:00PM - Feb 11th 2:00PM</Text>
                    </View>

                   <View style={{marginTop: 12, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                    <View style={{borderRadius: 10,flex: 0.5,padding: 10,marginHorizontal: 15,backgroundColor: 'rgba(216,216,216,1)'}}>
                      <Text style={{color: 'rgba(92,92,92,1)',alignSelf: 'center'}}>Deny Request</Text>
                    </View>

                    <View style={{borderRadius: 10,flex: 0.5,padding: 10,marginHorizontal: 15,backgroundColor: 'rgba(76,182,177,1)'}}>
                      <Text style={{color: '#fff',alignSelf: 'center'}}>Rent Your Ride</Text>
                    </View>

                   </View>

                </View>
           
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default RentalRequests
