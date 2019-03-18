import React, { Component } from 'react'
import {Text,Image, View, ScrollView, KeyboardAvoidingView, Picker, TouchableOpacity } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import QuestionIcon from 'react-native-vector-icons/EvilIcons'
import {DatePicker} from 'native-base'
import Tooltip from 'react-native-walkthrough-tooltip'
import UpDown from '../../../../../assets/UpDown.png'

class Availability extends Component {
  constructor(props){
    super(props)
    this.state={
      toolTipVisible1: false,
      toolTipVisible2: false,
      toolTipVisible3: false,
      chosenDate: new Date()
    }
  }

  setDate = (newDate)=> {
    this.setState({ chosenDate: newDate })
  }

  render() {
    return (
      <KeyboardAvoidingView>

        <ScrollView>

         <View style={{marginTop: 15}}>
            <View style={{position: 'absolute',padding: 7,left: 20}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                    <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                  </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
              
                <View style={{}}>
                  <Text style={{alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>AVAILABILITY</Text>
                </View>
            </View>
         </View>

          <View  style={{flex: 1, marginHorizontal: 20,marginTop: 30}}>
            
              <View style={{marginLeft: 10,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>NOTICE PERIOD</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible1}
                content={<Text>NOTICE PERIOD</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible1: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible1: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection: 'row',justifyContent: 'space-between',marginTop: 10, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                            <DatePicker                            
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select"
                                onDateChange={this.setDate}
                                placeHolderTextStyle={{ color: "rgba(163,163,163,1)" }}
                                
                                
                                />
                         </View>

                          <View style={{justifyContent: 'center',alignItems: 'center'}} >
                            <Image style={{width: 20,height: 20, tintColor: 'rgba(58,175,169,1)'}} source={UpDown}/>
                          </View>
              </View>

              

              <View style={{marginLeft: 10,marginTop: 13,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>MINIMUM BOOKING</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible2}
                content={<Text>MINIMUM BOOKING</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible2: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible2: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection: 'row',marginTop: 10, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                            <DatePicker                            
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select"
                                onDateChange={this.setDate}
                                placeHolderTextStyle={{ color: "rgba(163,163,163,1)" }}
                                
                                
                                />
                         </View>

                          <View style={{justifyContent: 'center',alignItems: 'center'}} >
                            <Image style={{width: 20,height: 20, tintColor: 'rgba(58,175,169,1)'}} source={UpDown}/>
                          </View>
                          
              </View>

              <View style={{marginLeft: 10, marginTop: 13,flexDirection: 'row'}}>
                <Text style={{fontSize: 15,fontWeight: '500'}}>MAXIMUM BOOKING</Text>
                <Tooltip
                animated
                isVisible={this.state.toolTipVisible3}
                content={<Text>MAXIMUM BOOKING</Text>}
                placement="top"
                onClose={()=> this.setState({ toolTipVisible3: false })}
                >
                  <TouchableOpacity onPress={()=> this.setState({ toolTipVisible3: true })}>
                    <QuestionIcon name="question" size={25}/>
                  </TouchableOpacity>
                </Tooltip>
              </View>
              <View style={{height: 50,flexDirection:'row',marginTop: 10, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                         <View style={{flex: 1}}>
                            <DatePicker                            
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select"
                                onDateChange={this.setDate}
                                placeHolderTextStyle={{ color: "rgba(163,163,163,1)" }}
                                
                                
                                />
                         </View>

                          <View style={{justifyContent: 'center',alignItems: 'center'}} >
                            <Image style={{width: 20,height: 20, tintColor: 'rgba(58,175,169,1)'}} source={UpDown}/>
                          </View>
              </View>
              


              

              <View style={{marginTop: 30, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding: 10,width: '50%'}}>
                    <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15,fontWeight: '500'}}>From</Text>
                    <Text style={{color: 'rgba(102,102,102,1)',fontSize: 10}}>JAN 20TH, 2019 - 12:00 AM</Text>
                  </View>
                  <View style={{padding: 10,width: '50%',borderLeftWidth: 2, borderLeftColor: 'rgba(151,151,151,0.21)'}}>
                    <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15,fontWeight: '500'}}>Until</Text>
                    <Text style={{color: 'rgba(102,102,102,1)',fontSize: 10}}>JAN 26TH, 2019 - 9:00 PM</Text>
                  </View>
                </View>
              </View>
              
            
              <View style={{marginBottom: 5,elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(58,175,169,1)', marginTop: 60}}>
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

export default Availability
