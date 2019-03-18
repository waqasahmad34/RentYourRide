import React, { Component } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign'
import { View,TouchableOpacity, Text, ScrollView} from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import MessageContainer from '../common/MessageContainer'


class Message extends Component {
    // static navigationOptions = {
    //   tabBarIcon: ({tintColor}) => (
    //       <Icon name="download" size={25} style={{color: tintColor}} />
    //     ),
    // }
    render() {
      return (
        <ScrollView>
          <View>
            <View style={{marginTop: 35}}>
              <View style={{position: 'absolute',padding: 7,left: 20}}>
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Message')}>
                        <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                      </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row',marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
                  
                    <View style={{}}>
                      <Text style={{color: 'rgba(100,100,100,1)',alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>MESSAGES</Text>
                    </View>
                  </View>
            </View>
            
            <View style={{marginTop: 10,flex: 1}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('MessageSingle')}>
              <MessageContainer name='Major Nelson' message='Enjoy the car, let me know…' time='1:54 PM' count='2'/>
              </TouchableOpacity>
              <MessageContainer name='Ronald Pump' message='Excellent Condition.' time='Thursday'/>
              <MessageContainer  name='Kebah Jurrasic' message='Can you please drop it.' time='2019-01-01'/>
              <MessageContainer name='Major Nelson' message='Enjoy the car, let me know…' time='1:54 PM' count='2'/>
              <MessageContainer name='Ronald Pump' message='Excellent Condition.' time='Thursday'/>
              <MessageContainer  name='Kebah Jurrasic' message='Can you please drop it.' time='2019-01-01'/>
             
              <MessageContainer name='Major Nelson' message='Enjoy the car, let me know…' time='1:54 PM' count='2'/>
              <MessageContainer name='Ronald Pump' message='Excellent Condition.' time='Thursday'/>
              <MessageContainer  name='Kebah Jurrasic' message='Can you please drop it.' time='2019-01-01'/>
             
              <MessageContainer name='Major Nelson' message='Enjoy the car, let me know…' time='1:54 PM' count='2'/>
              <MessageContainer name='Ronald Pump' message='Excellent Condition.' time='Thursday'/>
              <MessageContainer  name='Kebah Jurrasic' message='Can you please drop it.' time='2019-01-01'/>
              <MessageContainer name='Major Nelson' message='Enjoy the car, let me know…' time='1:54 PM' count='2'/>
              <MessageContainer name='Ronald Pump' message='Excellent Condition.' time='Thursday'/>
              <MessageContainer  name='Kebah Jurrasic' message='Can you please drop it.' time='2019-01-01'/>
             
              
            </View>
          </View>
        </ScrollView>
      )
    }
  }


  export default Message