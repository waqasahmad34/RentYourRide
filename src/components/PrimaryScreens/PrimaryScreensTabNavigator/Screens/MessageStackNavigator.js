import {createStackNavigator} from 'react-navigation'
import MessageSingle from './MessageScreens/MessageSingle'
import Message from './MessageScreens/Message'








const MessageStackNavigator = createStackNavigator({
  Message:{
    screen: Message,
    navigationOptions:{
      header: null
    }
  },
  MessageSingle:{
    screen: MessageSingle,
    navigationOptions:{
      header: null
    }
  },

})



export default MessageStackNavigator
