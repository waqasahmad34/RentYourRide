import React, { Component } from 'react'
import {CheckBox,Text,TextInput, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


class BasicInformation extends Component {
  render() {
    return (
      <KeyboardAvoidingView>

        <ScrollView>

          <View style={{position: 'absolute',padding: 7,left: 20}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                  <Icon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row',marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
             
              <View style={{}}>
                <Text style={{alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>BASIC INFORMATION</Text>
              </View>
            </View>

          <View  style={{flex: 1, marginHorizontal: 20,marginTop: 20}}>
            
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>VEHICLE LOCATION</Text>
              </View>
              <View style={{marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Select Your Location" />
              </View>

              <View style={{marginTop: 7}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                   <View  style={{marginLeft: 10}}>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>CAR MAKE</Text>
                    </View>
                    <View style={{marginTop: 8,marginRight: 8,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                      <TextInput style={{paddingLeft: 20}} placeholder="e.g., Toyota" />
                    </View>
                </View>
                
                
                <View style={{flex: 0.7}}>
                  <View  style={{marginLeft: 10}}>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>CAR YEAR</Text>
                    </View>
                    <View style={{marginTop: 8,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                      <TextInput style={{paddingLeft: 20}} placeholder="e.g., 2019" />
                    </View>
               </View>
                </View>
              </View>

              <View style={{marginLeft: 10,marginTop: 7}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>CAR MODEL</Text>
              </View>
              <View style={{marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="e.g., Corolla" />
              </View>

              <View style={{marginLeft: 10, marginTop: 7}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>LICENSE PLATE NUMBER</Text>
              </View>
              <View style={{marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="XXX-XXX" />
              </View>
              


              <View style={{marginLeft: 10, marginTop: 7}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>VEHICLE VIN NUMBER</Text>
              </View>
              <View style={{marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="XXXX-XXXX-XXXX-XXXX" />
              </View>

              <View style={{flexDirection: 'row',marginTop: 3}}>
                <View>
                 <CheckBox/>
                </View>
                <View style={{marginLeft: 5,alignContent: 'center',justifyContent: 'center'}}>
                  <Text style={{color: 'rgba(58,175,169,1)'}}>My car has never had a salvage title</Text>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View>
                 <CheckBox/>
                </View>
                <View style={{marginTop: 5,marginLeft: 5,alignContent: 'center',justifyContent: 'center'}}>
                  <Text style={{color: 'rgba(58,175,169,1)'}}>I have insurance policy that covers commercial rental transactions</Text>
                </View>
              </View>
            
            
              <View style={{marginBottom: 5,elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(58,175,169,1)', marginTop: 14}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                   <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>COMPLETE</Text>
                 </TouchableOpacity>
              </View>  
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

export default BasicInformation
