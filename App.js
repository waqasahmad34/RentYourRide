import React, {Component} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import SplashScreen from './src/components/SplashScreen/SplashScreen'
import SignUpStackNavigator from './src/components/SignUpScreens/SignUpStackNavigator/SignUpStackNavigator'
import DrawerNavigator from './src/components/PrimaryScreens/PrimaryScreensDrawerNavigator/DrawerNavigator'
import RecoveryLink from './src/components/RecoverPasswordScreens/RecoveryLink'

export default class App extends Component {
  render() {
    return (
      // <AppContainer/>
      <RecoveryLink />
      
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
    screen: DrawerNavigator
  },
  

})

const AppContainer = createAppContainer(switchNavigator)

