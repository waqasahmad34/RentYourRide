import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import StackNavigator from '../PrimaryScreensTabNavigator/StackNavigator'

const DrawerNavigator = createDrawerNavigator({
  Home:{
    screen: StackNavigator
  }
})


export default DrawerNavigator
