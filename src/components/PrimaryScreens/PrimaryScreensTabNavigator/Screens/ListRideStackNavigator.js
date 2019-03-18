import { createStackNavigator } from 'react-navigation'
import ListRide from '../Screens/ListRideScreens/ListRide'
import BasicInformation from '../Screens/ListRideScreens/BasicInformation'
import Availability from '../Screens/ListRideScreens/Availability'
import CarDetails from '../Screens/ListRideScreens/CarDetails'
import YourPricing from '../Screens/ListRideScreens/YourPricing'
import Extras from '../Screens/ListRideScreens/Extras'
import Photos from '../Screens/ListRideScreens/Photos'


const ListRideStackNavigator = createStackNavigator({
    ListRide:{
        screen: ListRide,
        navigationOptions:{
            header: null
        }
    },
    BasicInformation:{
        screen: BasicInformation,
        navigationOptions:{
            header: null
        }
    },
    Availability:{
        screen: Availability,
        navigationOptions:{
            header: null
        }
    },
    CarDetails:{
        screen: CarDetails,
        navigationOptions:{
            header: null
        }
    },
    YourPricing:{
        screen: YourPricing,
        navigationOptions:{
            header: null
        }
    },
    Extras:{
        screen: Extras,
        navigationOptions:{
            header: null
        }
    },
    Photos:{
        screen: Photos,
        navigationOptions:{
            header: null
        }
    }

})



export default ListRideStackNavigator
