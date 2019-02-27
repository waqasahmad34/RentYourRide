import React, { Component } from 'react'
import {View, Image,ProgressBarAndroid,Platform,ProgressViewIOS} from 'react-native'
import Logo from '../../assets/logo.png'

export default class SplashScreen extends Component {

  
  constructor(props){
    super(props)
    this.state = {    
      Progress_Value: 0.00
    }
  }
 
  Start_Progress = () =>{
    this.value = setInterval( () => {  
      if(this.state.Progress_Value <= 1) {
        this.setState({Progress_Value: this.state.Progress_Value + .01})
      }
    }, 100 )
  }
  componentDidMount() {

     setTimeout( () => {
          this.props.navigation.navigate('LoginScreen')
      },1000)

      
  }
 
  render() {
    
      this.Start_Progress()

      return (
     

        <View style={{backgroundColor: '#008080', flex: 1, justifyContent: 'center'}}>
           
           <View style={{with: 100, height: 93,marginTop: 50}}>
            <Image source={Logo} style={{tintColor: '#fff',width: null, height: null, resizeMode: 'center', flex: 1}}/>
          </View>
  
          <View style={{marginTop: 150, width: 200, alignSelf: 'center'}}>
            
            {
              (Platform.OS === 'android')
              ?
              ( <ProgressBarAndroid
              color="#fff"
              styleAttr="Horizontal"
              indeterminate={false}
              progress={this.state.Progress_Value}
            />)
              :
              ( <ProgressViewIOS
              color="#fff"
              styleAttr="Horizontal"
              indeterminate={false}
              progress={this.state.Progress_Value}
            />)
              
            }
           
          </View>
        </View>
      )
    }
}




