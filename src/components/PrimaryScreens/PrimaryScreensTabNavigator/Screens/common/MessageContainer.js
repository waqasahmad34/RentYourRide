import React from 'react'
import ChevronIcon from 'react-native-vector-icons/Entypo'
import { View, Text} from 'react-native'
import {Thumbnail} from 'native-base'
import CarPic from '../../../../../assets/car1.jpg'


const  MessageContainer = (props) => {
  
    return (
        <View style={{marginTop: 5,flex: 1}}> 
            <View style={{flexDirection: 'row',padding: 10}}>
                <View style={{}}>
                    <Thumbnail large source={CarPic}/>
                </View>
                <View style={{padding: 10,flex: 1}}>
                    <Text style={{color: 'rgba(6,6,6,1)',fontSize: 16,fontWeight: '500'}}>{props.name}</Text>
                    <Text style={{color: 'rgba(111,111,111,1)',marginTop: 0.5}}>{props.message}</Text>
                </View>
                <View style={{padding: 10}}>
                    <View style={[{borderRadius: 10}, (props.count) ? {backgroundColor: 'rgba(255,178,20,0.1)'}: {backgroundColor: '#fff'},{width: 40},{alignSelf: 'flex-end'},{marginRight: 5}]}>
                        <Text style={{color: 'rgba(255,187,46,1)',alignSelf: 'center'}}>{(props.count)? (props.count): null}</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 4}}>
                        <Text style={{color: 'rgba(162,162,162,1)'}}>{props.time}</Text>
                        <ChevronIcon name='chevron-small-right' color='rgba(162,162,162,1)' size={20}/>
                    </View>
                </View>
            </View>
        </View>
    )
  
}

export default MessageContainer
