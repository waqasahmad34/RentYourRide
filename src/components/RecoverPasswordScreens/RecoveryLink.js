import React, { Component } from 'react'
import { Text,View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity} from 'react-native'
import Logo from '../../assets/logo.png'




export default class RecoveryLink extends Component {
  render() {
    return (
      
     <KeyboardAvoidingView>

        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 35}}>
            
            <View style={{with: 60, height: 80,marginTop: 40}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            
           
              <View style={{marginTop: 50}}>
                <Text style={{fontSize: 23}}>FORGOT PASSWORD</Text>
                <View style={{borderBottomWidth: 3, borderBottomColor: "orange" ,width: 40, marginTop: 10}}>
                </View>
              </View>

              <View style={{alignSelf: 'center', marginTop: 50}}>
                <View>
                  <Text style={{fontSize: 15}}>Please provide your email address and</Text>
                </View>
                <View style={{alignSelf: 'center', marginTop: 5, fontSize: 15}}>
                  <Text>we'll send you a recovery link</Text>
                </View>
              </View>

              <View style={{marginTop: 50, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Recovery Email" />
              </View>

            
           
              <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30,
               padding: 15,backgroundColor: '#FFE5CC', marginTop: 30}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpFormScreen')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>SEND LINK</Text>
                 </TouchableOpacity>
               </View>  
            

            

            <View style={{marginTop: 120 , height: 30, flexDirection: 'row',alignSelf: 'center'}}>
              <Text>Rememberd your password? </Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('LoginScreen')}>
                <Text style={{color: 'blue'}}>Log In</Text>
              </TouchableOpacity>  
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

