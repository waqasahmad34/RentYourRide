import React, { Component } from 'react'
import { Text, Image ,View , TouchableOpacity,ScrollView } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import CarImage from '../../assets/car3.jpg'

class ActiveRentals extends Component {
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
            
              <Text style={{alignSelf: 'center',fontSize: 20,color: 'rgba(92,92,92,1)'}}>ACTIVE RENTALS</Text>
              
           </View>
        </View>
        
        <View style={{marginTop: 50,marginHorizontal: 10}}>
            <ScrollView>
                <View style={{backgroundColor: '#fff',marginBottom: 20, borderRadius: 20,flexWrap: 'wrap',height: 200}}>
                    <View style={{margin: 15}}>
                        
                          <View style={{flexDirection: 'row',}}>
                            <View style={{}}>
                                <Image source={CarImage} style={{borderRadius: 20,width: 100,resizeMode: 'cover',height: 100}}/>
                            </View>

                            <View style={{flexDirection: 'row',paddingLeft: 12,paddingTop: 6}}>
                              <View>
                                    <Text style={{color: 'rgba(80,80,80,1)',fontSize: 20,fontWeight: '500'}}>BMW 3 Series</Text>
                              </View>
                              <View style={{padding: 7}}>
                                    <Text style={{color: 'rgba(176,176,176,1)',fontSize: 15,fontWeight: '500'}}>SEDAN</Text>
                              </View>
                            </View> 

                            <View style={{position: 'absolute',width: '60%',flexWrap: 'wrap',flexDirection: 'row',left: 108, top: '42%'}}>
                              <View style={{marginRight: 5,backgroundColor: 'rgba(240,240,240,1)',alignSelf: 'flex-start',borderRadius: 25,padding: 5}}>
                                <Text style={{color: 'rgba(125,125,125,1)',fontSize: 10}}>WHITE</Text>
                              </View>

                              <View style={{marginRight: 5,backgroundColor: 'rgba(240,240,240,1)',alignSelf: 'flex-start',borderRadius: 25,padding: 5}}>
                                <Text style={{color: 'rgba(125,125,125,1)',fontSize: 10}}>AUTOMATIC</Text>
                              </View>

                              <View style={{marginRight: 5,backgroundColor: 'rgba(240,240,240,1)',alignSelf: 'flex-start',borderRadius: 25,padding: 5}}>
                                <Text style={{color: 'rgba(125,125,125,1)',fontSize: 10}}>GASOLINE</Text>
                              </View>

                            </View>

                            <View style={{position: 'absolute',flexWrap: 'wrap', top: '72%',left: 108}}>
                              <Text style={{color: 'rgba(202,202,202,0.7)'}}>BEING RENTED BY<Text  style={{color: 'rgba(76,182,177,1)'}}>Joe Mackenzie</Text></Text>
      
                            </View>
                        

                          
                        </View>

                        
                    </View>


                    <View style={{borderRadius: 20,padding: 10,borderWidth: 1,borderColor: 'rgba(255,187,46,1)',borderStyle: 'dashed',marginHorizontal: 15,backgroundColor: 'rgba(255,187,46,0.29)'}}>
                      <Text style={{color: 'rgba(255,172,0,1)',alignSelf: 'center'}}>From Jan 24th 1:00PM - Feb 11th 2:00PM</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default ActiveRentals
