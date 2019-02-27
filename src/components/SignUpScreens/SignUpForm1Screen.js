import React, { Component } from 'react'
import { Text,View, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import Logo from '../../assets/logo.png'
import CarPic from '../../assets/home2.png'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconic from 'react-native-vector-icons/Ionicons'
import {Textarea} from 'native-base'


const {width, height} = Dimensions.get('window')


class SignUpForm1Screen extends Component {
 
  render() {
    return (
      
     <KeyboardAvoidingView>

        <ScrollView>
          <View  style={{flex: 1, marginHorizontal: 36}}>
            
            <View style={{position: 'relative' , top: 20}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpFormScreen')}>
                <Iconic size={45} style={{color: 'orange'}} name="md-arrow-back"/>
              </TouchableOpacity>
            </View>


            <View style={{with: 60, height: 80,marginTop: 10}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            

            <View style={{width: 130, height: 130,borderWidth: 2,borderColor: '#dddddd',borderRadius: 100,backgroundColor: '#dddddd',padding: 45,marginTop: 15, justifyContent: 'center', alignSelf: 'center'}}>
                 <TouchableOpacity>
                   <Icon style={{alignContent: 'center'}} size={35} name="camera"/>
                 </TouchableOpacity>

                
              </View> 


              <View style={{justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
                  <Text style={{color: 'orange',fontSize: 15}}>UPLOAD PROFILE PICTURE</Text>
              </View>
             
             


              <View style={{marginTop: 20, borderWidth: 2, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <Textarea rowSpan={6} bordered placeholder="Write a little about yourself" />
              </View>
            
              <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 15,backgroundColor: '#FFE5CC', marginTop: 15}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('Swiper')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>FINISH SIGN UP</Text>
                 </TouchableOpacity>
              </View>  

              
              
        </View>
        <View style={{with: width, height: 93, paddingTop: 10}}>
          <Image source={CarPic} style={{width: null, height: null, resizeMode: 'stretch', flex: 1}}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

export default SignUpForm1Screen