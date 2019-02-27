import React from 'react';
import { StyleSheet, Dimensions,ScrollView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  image: {
    width: '100%',
    resizeMode: 'contain'
  },
  dotStyle: {
    backgroundColor: '#CCCCCC',
  },
  activeDotStyle: {
    backgroundColor: '#22AAFE',
  },
  buttonTextStyle:{
    backgroundColor: '#22AAFE',
  },
  buttonStyle:{
   color: 'transparent',  
  },
  
});

const slides = [
  {
    key: 'pic1',
    image: require('../../assets/Onboarding1.png'),
    imageStyle: styles.image,
  },
  {
    key: 'pic2',
    image: require('../../assets/Onboarding2.png'),
    imageStyle: styles.image,
  },
  {
    key: 'pic3',
    image: require('../../assets/Onboarding3.png'),
    imageStyle: styles.image,
  }

];

class Swiper extends React.Component {
  state = {
    showRealApp: false
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('DrawerNavigator')
    
  }

  _onSkip = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('DrawerNavigator')
  }
  render() {
    
      return(
      <ScrollView><AppIntroSlider onSkip={this._onSkip} showSkipButton={true} buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} activeDotStyle={styles.activeDotStyle} dotStyle={styles.dotStyle} slides={slides} onDone={this._onDone}/>
      </ScrollView>);
    }
  }

export default Swiper