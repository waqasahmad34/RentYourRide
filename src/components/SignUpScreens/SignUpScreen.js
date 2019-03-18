import React, { Component } from 'react'
import { Text,View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity} from 'react-native'
import {CheckBox} from 'native-base'
import Logo from '../../assets/logo.png'




export default class SignUpScreen extends Component {
  render() {
    return (
      
     <KeyboardAvoidingView>

        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 35}}>
            
            <View style={{with: 60, height: 80,marginTop: 35}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            
           
              <View style={{marginTop: 25}}>
                <Text style={{fontSize: 23}}>CREATE YOUR ACCOUNT</Text>
                <View style={{borderBottomWidth: 3, borderBottomColor: "orange" ,width: 40, marginTop: 10}}>
                </View>
              </View>

              <View style={{marginTop: 30, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Email Address" />
              </View>

              

              <View style={{marginTop: 20, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} secureTextEntry={true} placeholder="Password" />
              </View>

              <View style={{marginTop: 20, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} secureTextEntry={true} placeholder="Confirm Password" />
              </View>

              

          
            
           
              <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 15,backgroundColor: '#FFE5CC', marginTop: 35}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpFormScreen')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>CONTINUE</Text>
                 </TouchableOpacity>
               </View>  
            

            <View style={{flexDirection: 'row', marginTop: 30,justifyContent: 'center',marginHorizontal: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <CheckBox style={{borderWidth: 0.01,backgroundColor: '#fff',borderColor: '#dddddd', borderRadius: 5}} color="white"/>
                  </View>
                  <View style={{marginLeft: 15, flexDirection: 'row'}}>
                    <Text>I would like to </Text>
                    <TouchableOpacity>
                      <Text style={{color: 'blue'}}>recieve private messages</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>

            <View style={{marginTop: 55 , height: 30, flexDirection: 'row',alignSelf: 'center',justifyContent:'flex-end'}}>
              <TouchableOpacity>
                <Text style={{color: 'blue'}}>Terms & Conditions</Text>
              </TouchableOpacity>
              <Text> & </Text>
              <TouchableOpacity>
                <Text style={{color: 'blue'}}>Privacy Policy</Text>
              </TouchableOpacity>  
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

