import React, { Component } from 'react'
import { Text,View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import {CheckBox} from 'native-base'
import Logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LoginScreen extends Component {
  
  render() {
    return (
      
     <KeyboardAvoidingView style={{backgroundColor: '#F0F8FF'}} >

        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 35}}>
            
            <View style={{with: 60, height: 80,marginTop: 25}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            
            
              <View style={{marginTop: 25}}>
                <Text style={{fontSize: 23}}>SIGN IN</Text>
                <View style={{borderBottomWidth: 3, borderBottomColor: "orange" ,width: 45, marginTop: 10}}>

                </View>
              </View>

              <View style={{marginTop: 30, borderWidth: 1, backgroundColor: '#fff', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Email Address" />
              </View>

              <View style={{marginTop: 20, borderWidth: 1, backgroundColor: '#fff', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} secureTextEntry={true} placeholder="Password" />
              </View>

         

            <View style={{flexDirection: 'row', marginTop: 25,justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <CheckBox style={{borderWidth: 0.01,backgroundColor: '#fff',borderColor: '#dddddd', borderRadius: 5}} color="white"/>
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text>Remember Me</Text>
                  </View>
                </View>

                <View style={{marginRight: 10}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('RecoveryLink')}>
                    <Text style={{color: 'blue'}}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
            </View>

            
            
                <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 15,backgroundColor: '#FFE5CC', marginTop: 25}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('DrawerNavigator')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>LOG IN</Text>
                 </TouchableOpacity>
                </View>

                <View style={{marginTop: 25,borderRadius: 30, padding: 15,backgroundColor: '#3b5998'}}>
                  <TouchableOpacity>
                   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <View style={{marginRight: 20}}>
                        <Icon name="facebook" size={23} color="#fff" />
                      </View>
                      <View>
                        <Text style={{color: '#fff', fontSize: 18}}>Sign in with Facebook</Text>
                      </View>
                   </View>
                  </TouchableOpacity>
                </View>

                <View style={{borderColor: '#dddddd',borderWidth: 1 ,marginTop: 15,borderRadius: 30, padding: 15,backgroundColor: 'white'}}>
                  <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{marginRight: 20}}>
                          <Image source={google} style={{width: 20, height: 20}} />
                        </View>
                        <View>
                          <Text style={{fontSize: 18}}>Sign in with Google</Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                </View>
            

            <View style={{marginTop: 20, height: 30, flexDirection: 'row',alignSelf: 'center'}}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpScreen')}>
                <Text style={{color: 'blue'}}>Create an account</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

