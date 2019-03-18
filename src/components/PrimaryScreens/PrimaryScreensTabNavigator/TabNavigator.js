import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import Account from './Screens/Account'
import HomeIcon from 'react-native-vector-icons/SimpleLineIcons'
import MessageIcon from 'react-native-vector-icons/AntDesign'
import ListRideIcon from 'react-native-vector-icons/Entypo'

import CarStackNavigator from './Screens/CarStackNavigator'
import MessageStackNavigator from './Screens/MessageStackNavigator'
import ListRideStackNavigator from './Screens/ListRideStackNavigator'



const TabNavigator = createBottomTabNavigator({
  CarStackNavigator:{
    screen: CarStackNavigator,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <HomeIcon name="home" size={25} style={{color: tintColor,borderRadius: 25, padding: 10,backgroundColor: 'rgba(58,175,169,1)'}}/>
      ),  
    }
  },
  ListRideStackNavigator:{
    screen: ListRideStackNavigator,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <ListRideIcon name="text-document" size={25} style={{color: tintColor,borderRadius: 25, padding: 10,backgroundColor: 'rgba(58,175,169,1)'}}/>
      ),  
    }
  },
  
  Message:{
    screen: MessageStackNavigator,
    navigationOptions:{
        tabBarIcon: ({tintColor}) => (
            <MessageIcon name="download" size={25} style={{color: tintColor,borderRadius: 25, padding: 10,backgroundColor: 'rgba(58,175,169,1)'}} />
      ),  
    }   
  },
  Account:{
    screen: Account
  }

},{
  
  tabBarOptions:{
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(168,168,168,1)',
    showLabel: false,
    
    
  },
  navigationOptions:{
    header: null
  }
})


export default TabNavigator