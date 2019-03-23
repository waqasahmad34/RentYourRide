import React, { Component } from 'react'
import { Text,View, Image,Dimensions, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import {CheckBox} from 'native-base'
import Logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const {width,height} =  Dimensions.get('window')
export default class LoginScreen extends Component {
  
  constructor(props){
    super(props)
    console.log(width/15)
    console.log(height)
  }

  
  render() {
    return (
      
     <KeyboardAvoidingView style={{flex: 1,backgroundColor: '#F0F8FF'}} >

        <ScrollView>
          <View style={{marginHorizontal: 35}}>
            
            <View style={{with: wp('10%'), height: hp('12%'),marginTop: hp('5%')}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            
            
              <View style={{marginTop: hp('5%')}}>
                <Text style={{fontSize: hp('3.4%')}}>SIGN IN</Text>
                <View style={{borderBottomWidth: 3, borderBottomColor: "orange" ,width: 48, marginTop: 10}}>

                </View>
              </View>

              <View style={{marginTop: hp('5%'), borderWidth: 1, backgroundColor: '#fff', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Email Address" />
              </View>

              <View style={{marginTop: hp('2.5%'), borderWidth: 1, backgroundColor: '#fff', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} secureTextEntry={true} placeholder="Password" />
              </View>

         

            <View style={{flexDirection: 'row', marginTop: hp('3%'),justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <CheckBox style={{borderWidth: 0.01,backgroundColor: '#fff',borderColor: '#dddddd', borderRadius: 5}} color="white"/>
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: hp('2.1%')}}>Remember Me</Text>
                  </View>
                </View>

                <View style={{marginRight: 10}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('RecoveryLink')}>
                    <Text style={{color: 'blue',fontSize: hp('2.1%')}}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
            </View>

            
            
                <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 15,backgroundColor: '#FFE5CC', marginTop: hp('4%')}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('DrawerNavigator')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>LOG IN</Text>
                 </TouchableOpacity>
                </View>

                <View style={{marginTop: hp('3%'),borderRadius: 30, padding: 15,backgroundColor: '#3b5998'}}>
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

                <View style={{borderColor: '#dddddd',borderWidth: 1 ,marginTop: hp('1.5%'),borderRadius: 30, padding: 15,backgroundColor: 'white'}}>
                  <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{marginRight: 20}}>
                          <Image source={google} style={{width: 22, height: 22}} />
                        </View>
                        <View>
                          <Text style={{fontSize:  18}}>Sign in with Google</Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                </View>
            

            <View style={{marginTop: '3.5%', height: 30, flexDirection: 'row',alignSelf: 'center',justifyContent: 'flex-end'}}>
              <Text style={{fontSize: hp('2.1%')}}>Don't have an account? </Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpScreen')}>
                <Text style={{color: 'blue',fontSize: hp('2.1%')}}>Create an account</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

