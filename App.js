import React, {Component} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import SplashScreen from './src/components/SplashScreen/SplashScreen'
import SignUpStackNavigator from './src/components/SignUpScreens/SignUpStackNavigator/SignUpStackNavigator'
import DrawerNavigator from './src/components/PrimaryScreens/PrimaryScreensDrawerNavigator/DrawerNavigator'

export default class App extends Component {

  render() {
    console.disableYellowBox = true
    return (
      // <RequestVehicle />
      <AppContainer/>
     
    )
  }
}

const switchNavigator  = createSwitchNavigator({
  SplashScreen:{
    screen: SplashScreen,
  },
  
  SignUpStackNavigator: {
    screen: SignUpStackNavigator
  },
  DrawerNavigator:{
    screen: DrawerNavigator,
    
  },

})

const AppContainer = createAppContainer(switchNavigator)

