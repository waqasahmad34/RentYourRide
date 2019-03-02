import {createStackNavigator} from 'react-navigation'
import LoginScreen from '../../LoginScreen/LoginScreen'
import SignUpScreen from '../SignUpScreen'
import SignUpFormScreen from '../SignUpFormScreen'
import SignUpForm1Screen from '../SignUpForm1Screen'
import Swiper from '../../OnBoardingScreens/Swiper'
import RecoveryLink from '../../RecoverPasswordScreens/RecoveryLink'
import ResetPassword from '../../RecoverPasswordScreens/ResetPassword'


const SignUpStackNavigator = createStackNavigator({
  LoginScreen:{
    screen: LoginScreen, 
    navigationOptions:{
      header: null
    } 
  },
  SignUpScreen:{
    screen: SignUpScreen,
    navigationOptions:{
      header: null
    }
  },
  SignUpFormScreen:{
    screen: SignUpFormScreen,
    navigationOptions:{
      header: null
    }
  },
  SignUpForm1Screen:{
    screen: SignUpForm1Screen,
    navigationOptions:{
      header: null
    }
  },
  Swiper:{
    screen: Swiper,
    navigationOptions:{
      header: null
    }
  }
  
})

export default SignUpStackNavigator
