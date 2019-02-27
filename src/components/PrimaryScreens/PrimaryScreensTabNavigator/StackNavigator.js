import {createStackNavigator} from 'react-navigation'
import TabNavigator from './TabNavigator'

const StackNavigator = createStackNavigator({
  TabNavigator:{
    screen: TabNavigator,
  },

})


export default StackNavigator