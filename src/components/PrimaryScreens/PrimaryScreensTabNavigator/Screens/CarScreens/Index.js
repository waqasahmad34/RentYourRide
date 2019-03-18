import React, { Component } from 'react'
import {Text, View, Dimensions, Image, TextInput,ScrollView,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import CarPic from '../../../../../assets/backdrop.png'
import {DatePicker} from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'


const {width, height} = Dimensions.get('window')

class Index extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = { 
      chosenTime: 'Time',
      isVisible: false,
      chosenDate: new Date()
    }
    
  }
  
  handlePicker = (time) => {
    this.setState({
       isVisible: false,
       chosenTime: moment(time).format('HH:mm a')
      })
  }

  

  
 
  showPicker = () => this.setState({ isVisible: true })
 
  hidePicker = () => { 
    this.setState(
      { 
        isVisible: false,
        
      })
  }
  
  setDate = (newDate)=> {
    this.setState({ chosenDate: newDate })
  }

  render() {


    
    return (
    
    
    

      <ScrollView style={{flex: 1,backgroundColor: '#dddddd'}}>
        <KeyboardAvoidingView>

          <View style={{marginLeft: 25, marginTop: 40}}>
              <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}>
                <View>   
                  <View style={{borderBottomWidth: 5, borderBottomColor: "orange" ,width: 40}}>
                    </View>
                    <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "orange" ,width: 30}}>
                    </View>
                    <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "orange" ,width: 20}}>
                    </View>
                </View>
                
              </TouchableOpacity>
          </View>

          <View style={{margin: 25, backgroundColor: '#fff', height: 420, borderRadius: 15, marginTop: 30,elevation: 5}}>
            
              <View style={{margin: 25}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon color="orange" name="location-pin" size={30} />
                  <Text style={{fontSize: 20, marginLeft: 10}}>Location</Text>
                </View>

                <View style={{borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5, marginTop: 10}}>
                  <TextInput style={{paddingLeft: 20}} placeholder="Winnipeg" />
                </View>

                <View style={{marginLeft: 5}}>
                  <Text style={{fontSize: 10,color: 'red'}}>Error</Text>
                </View>


                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <IconMaterial color="orange" name="access-time" size={30} />
                  <Text style={{fontSize: 20, marginLeft: 10}}>From</Text>
                </View>

                <View style={{flexDirection: "row", marginTop: 10}}>
                  <View style={{flex: 1,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5, marginRight: 5}}>
                    <DatePicker                            
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Date"
                            onDateChange={this.setDate}
                            
                            
                            />

                    </View>
                    <View style={{marginLeft: 5,position: 'absolute',top: 42}}>
                    <Text style={{fontSize: 10,color: 'red'}}>Error</Text>
                    </View>
                    <View style={{flex: 1,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                        
                        <TouchableOpacity onPress={this.showPicker}>
                              <Text style={{padding: 10}}>{this.state.chosenTime}</Text>
                            </TouchableOpacity>
                              <DateTimePicker
                                  isVisible={this.state.isVisible}
                                  onConfirm={this.handlePicker}
                                  onCancel={this.hidePicker}
                                  mode="time"
                                  is24Hour={false}

                                />
                        <View style={{marginLeft: 5,position: 'absolute',top: 42}}>
                         <Text style={{fontSize: 10,color: 'red'}}>Error</Text>
                        </View>
                    </View>
                    
                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <IconMaterial color="orange" name="access-time" size={30} />
                  <Text style={{fontSize: 20, marginLeft: 10}}>Until</Text>
                </View>

                <View style={{flexDirection: "row" , marginTop: 10}}>
                  <View style={{flex: 1,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5, marginRight: 5}}>
                    <DatePicker                            
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Date"
                            onDateChange={this.setDate}
                            
                            
                            />
                    </View>
                    <View style={{marginLeft: 5,position: 'absolute',top: 42}}>
                      <Text style={{fontSize: 10,color: 'red'}}>Error</Text>
                    </View>
                    <View style={{flex: 1,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                        
                        
                        <TouchableOpacity onPress={this.showPicker}>
                          <Text style={{padding: 10}}>{this.state.chosenTime}</Text>
                        </TouchableOpacity>
                          <DateTimePicker
                              isVisible={this.state.isVisible}
                              onConfirm={this.handlePicker}
                              onCancel={this.hidePicker}
                              mode="time"
                              

                            />
                        
                        <View style={{marginLeft: 5,position: 'absolute',top: 42}}>
                         <Text style={{fontSize: 10,color: 'red'}}>Error</Text>
                        </View>
                    </View>
                  </View>


                <View style={{borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 11,backgroundColor: '#FFE5CC', marginTop: 23}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('CarListing')}>
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>Search Ride</Text>
                 </TouchableOpacity>
                </View>  
              </View>
              
          </View>
          <View style={{with: width,height: 95,justifyContent: 'flex-end'}}>
            <Image source={CarPic} style={{width: null, height: null, resizeMode: 'stretch', flex: 1}}/>
           </View>
        </KeyboardAvoidingView>
      </ScrollView>




  

    
      
    )
  }
}

export default Index