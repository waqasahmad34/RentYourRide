import {createBottomTabNavigator} from 'react-navigation'
import Home from './Screens/Home'
import Detail from './Screens/Detail'
import Message from './Screens/Message'
import Account from './Screens/Account'


const TabNavigator = createBottomTabNavigator({
  Home:{
    screen: Home
  },
  Detail:{
    screen: Detail
  },
  Message:{
    screen: Message
  },
  Account:{
    screen: Account
  }

},{
  navigationOptions:{
    header: null
  }
})


export default TabNavigator