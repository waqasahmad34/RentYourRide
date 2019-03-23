import React, { Component } from 'react'
import {Text,View, ScrollView, KeyboardAvoidingView, TouchableOpacity,TextInput,Switch } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import PlusIcon from 'react-native-vector-icons/AntDesign'
import SpeedIcon from 'react-native-vector-icons/SimpleLineIcons'


class YourPricing extends Component {

  constructor() {
    super()
    this.state = {
       switchValue: false,
    }
 }
 toggleSwitch = (value) => {
    this.setState({switchValue: value})
 }
 
  render() {
    return (
      <KeyboardAvoidingView>

        <ScrollView>

         <View style={{marginTop: 25}}>
          <View style={{position: 'absolute',padding: 7,left: 20}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                    <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                  </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
              
                <View style={{}}>
                  <Text style={{alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>YOUR PRICING</Text>
                </View>
              </View>
         </View>

          <View  style={{flex: 1, marginHorizontal: 20,marginTop: 25}}>


              <View>
                <View style={{borderTopWidth: 2, borderTopColor: "rgba(244,243,247,1)"}}></View>

                <View style={{marginTop: 10}}>

                  <View style={{marginTop: 12, flexDirection: 'row',justifyContent: 'space-between'}}>
                    <View>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>ARE YOU ABLE TO DELIVER?</Text>
                    </View>
                    <View>
                      <Switch
                        onValueChange = {this.toggleSwitch}
                        value = {this.state.switchValue}
                        />
                    </View>
                  </View>

                </View>

                <View style={{borderBottomWidth: 2, borderBottomColor: "rgba(244,243,247,1)" ,marginTop: 12}}></View>
              </View>
              
              <View style={{marginTop: 8}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                   <View  style={{marginLeft: 10}}>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>RENTAL PRICE</Text>
                    </View>
                    <View style={{marginTop: 8,marginRight: 8,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                      <TextInput style={{paddingLeft: 20}} placeholder="$0.00" />
                    </View>
                  </View>
                
                
                  <View style={{flex: 1}}>
                    <View  style={{marginLeft: 10}}>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>DROP FEE</Text>
                    </View>
                    <View style={{marginTop: 8,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                      <TextInput style={{paddingLeft: 20}} placeholder="$0.00" />
                    </View>
                  </View>
                </View>
              </View>


              <View style={{marginTop: 8}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                   <View  style={{marginLeft: 10}}>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>WEEKLY DISCOUNT</Text>
                    </View>
                    <View style={{marginTop: 8,marginRight: 8,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                      <TextInput style={{paddingLeft: 20}} placeholder="$0.00" />
                    </View>
                  </View>
                
                
                  <View style={{flex: 1}}>
                    <View  style={{marginLeft: 10}}>
                      <Text style={{fontSize: 15,fontWeight: '500'}}>MONTHLY DISCOUNT</Text>
                    </View>
                    <View style={{marginTop: 8,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                      <TextInput style={{paddingLeft: 20}} placeholder="$0.00" />
                    </View>
                  </View>
                </View>
              </View>


              <View style={{elevation: 2,marginTop: 25,borderRadius: 10, padding: 15,backgroundColor: 'rgba(255,187,46,1)'}}>
                  <TouchableOpacity>
                   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <View style={{marginRight: 20}}>
                        <SpeedIcon name="speedometer" size={25} color="#fff" />
                      </View>
                      <View>
                        <Text style={{color: '#fff', fontSize: 18}}>KILOMETRE ALLOWANCES</Text>
                      </View>
                   </View>
                  </TouchableOpacity>
                </View>
               

                <View style={{elevation: 2,marginTop: 16,borderRadius: 10, padding: 15,backgroundColor: 'rgba(84,84,84,1)'}}>
                  <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{marginRight: 20}}>
                        <PlusIcon name="plussquareo" size={25} color="#fff" />
                        </View>
                        <View>
                          <Text style={{fontSize: 18,color: '#fff'}}>ADDITIONAL OPTIONS</Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                </View>
            

            
              <View style={{marginBottom: 5,elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(58,175,169,1)', marginTop: 40}}>
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

export default YourPricing
