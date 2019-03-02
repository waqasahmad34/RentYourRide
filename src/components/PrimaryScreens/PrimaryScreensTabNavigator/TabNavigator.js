import {createBottomTabNavigator} from 'react-navigation'
import Index from './Screens/Index'
import CarListing from './Screens/CarListing'
import Message from './Screens/Message'
import Account from './Screens/Account'

const TabNavigator = createBottomTabNavigator({
  Index:{
    screen: Index, 
  },
  CarListing:{
    screen: CarListing
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