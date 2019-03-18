import {createStackNavigator} from 'react-navigation'
import CarListing from './CarScreens/CarListing'
import SingleCar from './CarScreens/SingleCar'
import Index from './CarScreens/Index'



const CarStackNavigator = createStackNavigator({
  Index:{
    screen: Index,
    navigationOptions:{
      header: null
    }
  },
  CarListing:{
    screen: CarListing,
    navigationOptions:{
      header: null
    }
  },
  SingleCar:{
    screen: SingleCar,
    navigationOptions:{
      header: null
    }
  },

})



export default CarStackNavigator
