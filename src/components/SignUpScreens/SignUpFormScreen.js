import React, { Component } from 'react'
import { Text,View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, Picker } from 'react-native'
import Logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'


class SignUpFormScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      postalCode: '',
      province: ''
    }
  }
  render() {
    return (
      
     <KeyboardAvoidingView>

        <ScrollView>
          <View  style={{flex: 1, marginHorizontal: 35}}>
            
            <View style={{position: 'relative' , top: 20}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpScreen')}>
                <Icon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
              </TouchableOpacity>
            </View>
            <View style={{with: 60, height: 80,marginTop: 10}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            
           

              <View style={{marginTop: 30, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="First Name" />
              </View>

              <View style={{marginTop: 15, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Last Name" />
              </View>

              <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center'}}>  
                <View style={{borderBottomWidth: 3, borderBottomColor: "#dddddd" ,width: 40, marginTop: 10}}>
                </View> 
              </View>

              <View style={{marginTop: 16, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Address" />
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{marginRight: 8,flex: 2,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                  <TextInput style={{paddingLeft: 20}} placeholder="City" />
                </View>
                <View style={{flex: 1.7,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <Picker
                    selectedValue={this.state.province}
                    style={{flex: 1}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({province: itemValue})
                    }>
                    <Picker.Item label='Province' value='0' />
                    <Picker.Item label='Ontario' value='1' />
                    <Picker.Item label='Quebec' value='2' />
                    <Picker.Item label='Manitoba' value='3' />
                    <Picker.Item label='Alberta' value='4' />
                  </Picker>
                </View>
              </View>
              
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{marginRight: 8,flex: 1.2,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <Picker
                    
                    selectedValue={this.state.postalCode}
                    style={{flex: 1}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({postalCode: itemValue})
                    }>
                    <Picker.Item label='Postal Code' value='0' />
                    <Picker.Item label='52250' value='1' />
                    <Picker.Item label='77000' value='2' />
                  </Picker>
                </View>
                <View style={{flex: 0.9,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                  <TextInput style={{paddingLeft: 20}} placeholder="Country" />
                </View>
              </View>


              <View style={{marginTop: 15, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Phone Number" />
              </View>
            
            
              <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 15,backgroundColor: '#FFE5CC', marginTop: 16}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpForm1Screen')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>CONTINUE</Text>
                 </TouchableOpacity>
              </View>  
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

export default SignUpFormScreen

