import {createDrawerNavigator} from 'react-navigation'
import StackNavigator from '../PrimaryScreensTabNavigator/StackNavigator'
import CustomDrawerComponent from './CustomDrawerComponent'


const DrawerNavigator = createDrawerNavigator({
 
  Rent: {
    screen: StackNavigator,
    
  },
},{
  drawerWidth: 300,
  contentComponent: CustomDrawerComponent,
})







export default DrawerNavigator
