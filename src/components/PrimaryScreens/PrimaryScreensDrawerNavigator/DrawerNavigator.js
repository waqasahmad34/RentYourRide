import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import StackNavigator from '../PrimaryScreensTabNavigator/StackNavigator'

const DrawerNavigator = createDrawerNavigator({
 
  Menu: StackNavigator,
  HomeScreen:{
    screen: HomeScreen 
   },
})


export default DrawerNavigator
