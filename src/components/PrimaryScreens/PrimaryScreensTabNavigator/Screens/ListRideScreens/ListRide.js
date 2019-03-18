import React, { Component } from 'react'
import {Text, View, Dimensions, Image, TextInput,ScrollView,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import CheckIcon from 'react-native-vector-icons/MaterialIcons'

const {width, height} = Dimensions.get('window')

class ListRide extends Component {

  render() {
    return (

      <ScrollView style={{flex: 1,backgroundColor: '#dddddd'}}>
        <KeyboardAvoidingView>

          <View style={{marginLeft: 25, marginTop: 25}}>
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

          <View style={{marginHorizontal: 10,backgroundColor: '#fff', height: height -245, borderRadius: 6, marginTop: 25,elevation: 5}}>
            <View style={{borderRadius: 6,backgroundColor: 'rgba(247,247,247,1)',height: 80,justifyContent: 'center',alignItems: 'center'}}>
              <Text style={{fontSize: 20,color: 'rgba(76,182,177,1)',fontWeight: '500'}}>FILL OUR ALL SECTIONS</Text>
            </View>


            <View style={{marginTop: 6}}>
              <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{borderWidth: 2,borderColor: 'rgba(76,182,177,1)',width:35,height: 35,borderRadius: 40
              ,justifyContent: 'center',alignItems: 'center'}}>
                  <CheckIcon name="check" color="rgba(255,187,46,1)" size={25}/>
                </View>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('BasicInformation')} style={{flex: 1,flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row',flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: 'rgba(146,146,146,1)'}}>BASIC INFORMATION</Text>
                    
                  </View>
                  <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <CheckIcon  name="chevron-right" color='rgba(76,182,177,1)' size={30}/>
                  </View>
               </TouchableOpacity>
                
                
              </View>

              <View style={{borderWidth: 0.25,marginTop:3,borderColor: 'rgba(151,151,151,1)'}}></View>

              <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{borderWidth: 2,borderColor: 'rgba(151,151,151,1)',width:35,height: 35,borderRadius: 40
              ,justifyContent: 'center',alignItems: 'center'}}>
                  {/* <CheckIcon name="check" color="rgba(255,187,46,1)" size={25}/> */}
                </View>

                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Availability')} style={{flex: 1,flexDirection: 'row'}}>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: 'rgba(146,146,146,1)'}}>AVAILABILITY</Text>
                  </View>
                  <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <CheckIcon name="chevron-right" color='rgba(76,182,177,1)' size={30}/>
                  </View>
                </TouchableOpacity>
                
              </View>

              <View style={{borderWidth: 0.25,marginTop:3,borderColor: 'rgba(151,151,151,1)'}}></View>

              <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{borderWidth: 2,borderColor: 'rgba(151,151,151,1)',width:35,height: 35,borderRadius: 40
              ,justifyContent: 'center',alignItems: 'center'}}>
                  {/* <CheckIcon name="check" color="rgba(255,187,46,1)" size={25}/> */}
                </View>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('CarDetails')} style={{flex: 1,flexDirection: 'row'}}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: 'rgba(146,146,146,1)'}}>CAR DETAILS</Text>
                  </View>
                  <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <CheckIcon name="chevron-right" color='rgba(76,182,177,1)' size={30}/>
                  </View>
               </TouchableOpacity>

                
              </View>


              <View style={{borderWidth: 0.25,marginTop:3,borderColor: 'rgba(151,151,151,1)'}}></View>

              <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{borderWidth: 2,borderColor: 'rgba(151,151,151,1)',width:35,height: 35,borderRadius: 40
              ,justifyContent: 'center',alignItems: 'center'}}>
                  {/* <CheckIcon name="check" color="rgba(255,187,46,1)" size={25}/> */}
                </View>

               <TouchableOpacity onPress={()=> this.props.navigation.navigate('YourPricing')} style={{flex: 1,flexDirection: 'row'}}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: 'rgba(146,146,146,1)'}}>YOUR PRICING</Text>
                  </View>
                  <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <CheckIcon name="chevron-right" color='rgba(76,182,177,1)' size={30}/>
                  </View>
               </TouchableOpacity>
                
              </View>


              <View style={{borderWidth: 0.25,marginTop:3,borderColor: 'rgba(151,151,151,1)'}}></View>

              <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{borderWidth: 2,borderColor: 'rgba(151,151,151,1)',width:35,height: 35,borderRadius: 40
              ,justifyContent: 'center',alignItems: 'center'}}>
                  {/* <CheckIcon name="check" color="rgba(255,187,46,1)" size={25}/> */}
                </View>
               
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('Extras')} style={{flex: 1,flexDirection: 'row'}}>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                      <Text style={{fontSize: 20,color: 'rgba(146,146,146,1)'}}>EXTRAS</Text>
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                      <CheckIcon name="chevron-right" color='rgba(76,182,177,1)' size={30}/>
                    </View>
                 </TouchableOpacity>
                
                
              </View>



              <View style={{borderWidth: 0.25,marginTop:3,borderColor: 'rgba(151,151,151,1)'}}></View>

              <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{borderWidth: 2,borderColor: 'rgba(151,151,151,1)',width:35,height: 35,borderRadius: 40
              ,justifyContent: 'center',alignItems: 'center'}}>
                  {/* <CheckIcon name="check" color="rgba(255,187,46,1)" size={25}/> */}
                </View>
               
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('Photos')} style={{flex: 1,flexDirection: 'row'}}>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: 'rgba(146,146,146,1)'}}>PHOTOS</Text>
                  </View>
                  <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <CheckIcon name="chevron-right" color='rgba(76,182,177,1)' size={30}/>
                  </View> 
               </TouchableOpacity>
               
                
              </View>
            </View>
    
              
          </View>

          <View style={{marginHorizontal: 10,marginBottom: 5,elevation: 2,borderRadius: 10,
             padding: 18,backgroundColor: 'rgba(58,175,169,1)', marginTop: 20}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('BasicInformation')}>
              <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>LIST MY RIDE</Text>
            </TouchableOpacity>
          </View> 
        
        </KeyboardAvoidingView>
      </ScrollView>




  

    
      
    )
  }
}

export default ListRide