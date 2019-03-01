import {createBottomTabNavigator} from 'react-navigation'
import Index from './Screens/Index'
import Detail from './Screens/Detail'
import Message from './Screens/Message'
import Account from './Screens/Account'

const TabNavigator = createBottomTabNavigator({
  Index:{
    screen: Index, 
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
  tabBarOptions:{
    activeTintColor: '#fff',
    showLabel: false,
    activeBackgroundColor: '#008080',
    
   
  },
  navigationOptions:{
    header: null
  }
})


export default TabNavigator