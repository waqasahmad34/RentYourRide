import React, { Component } from 'react'
import { View,TouchableOpacity, Text, ScrollView} from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import { Thumbnail } from 'native-base';
import CarPic from '../../../../../assets/car1.jpg'



class MessageSingle extends Component {
  
  render() {
    return (

    
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,backgroundColor: 'rgba(126,126,126,0.3)'}}>
            
        <View style={{backgroundColor: '#fff',height: 100}}>
            <View style={{top: 30,position: 'absolute',padding: 7,left: 20}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Message')}>
                  <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                </TouchableOpacity>
            </View>
           <View style={{flexDirection: 'row',marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
          
            <View style={{marginTop: 30,}}>
              <Text style={{color: 'rgba(100,100,100,1)',alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>Major Nelson</Text>
            </View>
          </View>
         </View>
          
          <View style={{marginTop: 10,flex: 1,}}>
           
            
              <View style={{marginTop: 25, padding: 5, flexDirection: 'row'}}>

               <View style={{marginTop: 5}}>
                <Thumbnail source={CarPic} />
                <Text style={{color: 'rgba(111,111,111,1)',margin: 10}}>12:30</Text>
               </View>
               <View style={{position: 'absolute',
                width: 0,
                height: 0,
                borderTopColor: 'transparent',
                borderTopWidth: 10,
                borderRightWidth: 14,
                borderRightColor: '#fff',
                borderBottomColor: 'transparent',
                borderBottomWidth: 10,
                left: 65,
                top:18}}></View>
                <View style={{borderRadius: 10,backgroundColor: '#fff'
                ,alignSelf: 'flex-start',borderLeftRadius: 20
                ,padding: 10,marginLeft: 15,flex: 1}}>
                  <Text style={{color: 'rgba(111,111,111,1)'}}>Lorem ipsum dolor sit amet, consect
                        adipiscing elit. Cras vulputate consequat 
                        quis eleifend. Integer scelerisque feugiat 
                        ante sit amet interdum. Mauris eget
                        sollicitudin sed odio sed rutrum.</Text>
                </View>
               
              </View>

            
              <View style={{marginTop: 25,padding: 5, flexDirection: 'row-reverse'}}>

               <View style={{}}>
                <Thumbnail source={CarPic} />
                <Text style={{color: 'rgba(111,111,111,1)',margin: 10}}>12:30</Text>
               </View>
               <View style={{position: 'absolute',
                width: 0,
                height: 0,
                borderTopColor: 'transparent',
                borderTopWidth: 10,
                borderRightWidth: 14,
                borderRightColor: 'rgba(76,182,177,1)',
                borderBottomColor: 'transparent',
                borderBottomWidth: 10,
                left: 65,
                top:17,transform: [{rotate: '180deg'}]}}></View>
                <View style={{borderRadius: 10,backgroundColor: 'rgba(76,182,177,1)'
                ,alignSelf: 'flex-start',borderLeftRadius: 20
                ,padding: 10,marginRight: 15,flex: 1}}>
                  <Text style={{color: '#fff'}}>Lorem ipsum dolor sit amet, consect
adipiscing elit. Cras vulputate consequat.</Text>
                </View>
               
              </View>
              
            


            
              <View style={{marginTop: 25, padding: 5, flexDirection: 'row'}}>

               <View style={{marginTop: 5}}>
                <Thumbnail source={CarPic} />
                <Text style={{color: 'rgba(111,111,111,1)',margin: 10}}>12:30</Text>
               </View>
               <View style={{position: 'absolute',
                width: 0,
                height: 0,
                borderTopColor: 'transparent',
                borderTopWidth: 10,
                borderRightWidth: 14,
                borderRightColor: '#fff',
                borderBottomColor: 'transparent',
                borderBottomWidth: 10,
                left: 65,
                top:18}}></View>
                <View style={{borderRadius: 10,backgroundColor: '#fff'
                ,alignSelf: 'flex-start',borderLeftRadius: 20
                ,padding: 10,marginLeft: 15,flex: 1}}>
                  <Text style={{color: 'rgba(111,111,111,1)'}}>Lorem ipsum dolor sit amet, consect
                    adipiscing elit. Cras vulputate consequat 
                    quis eleifend. </Text>
                </View>
               
              </View>


            

           
        </View>
      </ScrollView>
    )
  }
}

export default MessageSingle
