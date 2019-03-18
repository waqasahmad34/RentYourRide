import React, { Component } from 'react'
import {Text,View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import {Textarea} from 'native-base'

class Extras extends Component {
 
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
                  <Text style={{alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>EXTRAS</Text>
                </View>
              </View>
         </View>

          <View  style={{flex: 1, marginHorizontal: 20,marginTop: 35}}>


              <View style={{marginLeft: 5}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>TELL US ABOUT THE VEHICLE</Text>
              </View>
            
              <View style={{marginTop: 10, borderWidth: 2, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <Textarea rowSpan={6} bordered placeholder="Any additional info you would like to add about your vehicle?" />
              </View>



              <View style={{marginTop: 10, marginLeft: 5}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>TELL US ABOUT YOURSELF</Text>
              </View>

              <View style={{marginTop: 10, borderWidth: 2, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <Textarea rowSpan={6} bordered placeholder="Any additional info you would like to add about yourself?" />
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

export default Extras
