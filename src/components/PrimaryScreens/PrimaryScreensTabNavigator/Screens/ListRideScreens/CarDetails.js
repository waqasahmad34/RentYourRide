import React, { Component } from 'react'
import {Text, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import QuestionIcon from 'react-native-vector-icons/EvilIcons'
import {Picker} from 'native-base'
import Tooltip from 'react-native-walkthrough-tooltip'
import PlusIcon from 'react-native-vector-icons/Entypo'



class CarDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      toolTipVisible1: false,
      toolTipVisible2: false,
      toolTipVisible3: false,
      toolTipVisible4: false,
      vehicleColour: undefined,
      vehicleTransmission: undefined,
      driveTrain: undefined,
      odoMeter: undefined,
      fuelType: undefined
    
    }
  }
  

  render() {
    return (
      <KeyboardAvoidingView>

        <ScrollView>

         <View style={{marginTop: 12}}>
          <View style={{position: 'absolute',padding: 7,left: 20}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                    <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                  </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
              
                <View style={{}}>
                  <Text style={{alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>CAR DETAILS</Text>
                </View>
              </View>
         </View>

          <View  style={{flex: 1, marginHorizontal: 20,marginTop: 20}}>
            
              <View style={{marginLeft: 10,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>VEHICLE COLOUR</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible1}
                content={<Text>VEHICLE COLOUR</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible1: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible1: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection: 'row',justifyContent: 'space-between',marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                         <Picker
                              mode="dropdown"
                              style={{ width: undefined }}                             
                              selectedValue={this.state.vehicleColour}
                              onValueChange={(vehicleColour) =>
                                this.setState({vehicleColour: vehicleColour})
                              }
                            >
                              <Picker.Item label="Vehicle Colour" value="key0" />
                              <Picker.Item label="Red" value="key1" />
                              <Picker.Item label="Green" value="key2" />
                              <Picker.Item label="Black" value="key3" />
                              <Picker.Item label="Blue" value="key4" />
                            </Picker>
                         </View>
              </View>

              
              

              

              <View style={{marginLeft: 10,marginTop: 8,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>VEHICLE TRANSMISSION</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible2}
                content={<Text>VEHICLE TRANSMISSION</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible2: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible2: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection: 'row',marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                         <Picker
                              mode="dropdown"
                              style={{ width: undefined }}                             
                              selectedValue={this.state.vehicleTransmission}
                              onValueChange={(vehicleTransmission) =>
                                this.setState({vehicleTransmission: vehicleTransmission})
                              }
                            >
                              <Picker.Item label="Transmission Type" value="key0" />
                              <Picker.Item label="Automatic" value="key1" />
                              <Picker.Item label="Semi Automatic" value="key2" />
                              <Picker.Item label="Dual Clutch" value="key3" />
                              <Picker.Item label="Manumatic" value="key4" />
                            </Picker>
                         </View>

                         
                          
              </View>

              <View style={{marginLeft: 10, marginTop: 8,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>DRIVE TRAIN</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible3}
                content={<Text>DRIVE TRAIN</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible3: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible3: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection:'row',marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                         <Picker
                              mode="dropdown"
                              style={{ width: undefined }}                             
                              selectedValue={this.state.driveTrain}
                              onValueChange={(driveTrain) =>
                                this.setState({driveTrain: driveTrain})
                              }
                            >
                              <Picker.Item label="Drive Train" value="key0" />
                              <Picker.Item label="eg drivetrain" value="key1" />
                              <Picker.Item label="eg drivetrain" value="key2" />
                              
                            </Picker>
                         </View>

                        
              </View>




              <View style={{marginLeft: 10, marginTop: 8,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>ODOMETER</Text>                
              </View>
              <View style={{height: 50,flexDirection:'row',marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                         <Picker
                              mode="dropdown"
                              style={{ width: undefined }}                             
                              selectedValue={this.state.odoMeter}
                              onValueChange={(odoMeter) =>
                                this.setState({odoMeter: odoMeter})
                              }
                            >
                              <Picker.Item label="Select" value="key0" />
                              <Picker.Item label="eg odometer" value="key1" />
                              <Picker.Item label="eg odometer" value="key2" />
                             
                            </Picker>
                         </View>

                        
              </View>

              <View style={{marginLeft: 10, marginTop: 8,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>Fuel Type</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible4}
                content={<Text>Fuel Type</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible4: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible4: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection:'row',marginTop: 8, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                         <Picker
                              mode="dropdown"
                              style={{ width: undefined }}                             
                              selectedValue={this.state.fuelType}
                              onValueChange={(fuelType) =>
                                this.setState({fuelType: fuelType})
                              }
                            >
                              <Picker.Item label="Fuel Type" value="key0" />
                              <Picker.Item label="Diesel" value="key1" />
                              <Picker.Item label="Natural gas" value="key2" />
                              <Picker.Item label="Hydrogen" value="key3" />
                              <Picker.Item label="Biodiesel" value="key4" />
                            </Picker>
                         </View>

                        
              </View>
              

              <View style={{marginTop: 10,flexDirection: 'row'}}>
                <View style={{height: 35,elevation: 1,marginRight: 5,backgroundColor: 'rgba(255,187,46,1)',alignSelf: 'flex-start',borderRadius: 25,padding: 6}}>
                  <Text style={{color: 'rgba(132,90,4,1)'}}>Bluetooth</Text>
                </View>

                <View style={{height: 35,elevation: 1,padding: 10,marginRight: 5,backgroundColor: 'rgba(255,187,46,1)',alignSelf: 'flex-start',borderRadius: 25,padding: 6}}>
                  <Text style={{color: 'rgba(132,90,4,1)'}}>Heated Seats</Text>
                </View>
                <TouchableOpacity>
                  <View style={{padding: 15,height: 35,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',borderWidth:1,borderColor: 'rgba(151,151,151,1)',borderRadius: 25,alignSelf: 'flex-start'}}>
                      <PlusIcon size={15} name="plus" color='rgba(74,74,74,1)' />
                      <Text style={{color: 'rgba(74,74,74,1)'}}>ADD FEATURE</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
            
              <View style={{marginBottom: 5,elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(58,175,169,1)', marginTop: 30}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                   <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>COMPLETE</Text>
                 </TouchableOpacity>
              </View>  
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

export default CarDetails
