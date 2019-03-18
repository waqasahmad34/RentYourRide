import React, { Component } from 'react'
import { Text,View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity} from 'react-native'
import Logo from '../../assets/logo.png'




export default class SetPassword extends Component {
  render() {
    return (
      
     <KeyboardAvoidingView>

        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 35}}>
            
            <View style={{with: 60, height: 80,marginTop: 50}}>
              <Image source={Logo} style={{width: null, height: null, resizeMode: 'center', flex: 1}}/>
            </View>
            
           
              <View style={{marginTop: 50}}>
                <Text style={{fontSize: 23}}>RESET PASSWORD</Text>
                <View style={{borderBottomWidth: 3, borderBottomColor: "orange" ,width: 40, marginTop: 10}}>
                </View>
              </View>

             

              <View style={{marginTop: 60, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Recovery Email" />
              </View>

              <View style={{marginTop: 20, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <TextInput style={{paddingLeft: 20}} placeholder="Recovery Email" />
              </View>

            
           
              <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30,
               padding: 15,backgroundColor: '#FFE5CC', marginTop: 40}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('LoginScreen')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>RESET PASSWORD</Text>
                 </TouchableOpacity>
               </View>  
            

            

            <View style={{marginTop: 120 , height: 30, flexDirection: 'row',alignSelf: 'center',justifyContent: 'flex-end'}}>
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

