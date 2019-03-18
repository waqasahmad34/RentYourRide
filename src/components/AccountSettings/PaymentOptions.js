import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import PlusIcon from 'react-native-vector-icons/Entypo'
import Visa from '../../assets/visa.png'
import Paypal from '../../assets/paypal.png'
import Apple from '../../assets/apple.png'
import Dialog, { SlideAnimation, DialogTitle,DialogContent } from 'react-native-popup-dialog'
import { Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')




class PaymentOptions extends Component {

    
  constructor(props){
    super(props)
    this.state = {
      visible: false,
    }
  }

  setModalVisible = (visible) => {
    this.setState({visible: visible})
  }
  render() {
    return (
        <ScrollView style={{flex: 1,backgroundColor: 'rgba(243,244,247,1)'}}>
                <View style={{marginHorizontal: 20, marginTop: 50, flexDirection: 'row',justifyContent: 'space-between'}}>
                    <View style={{marginTop: 5,marginLeft: 10}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}>
                    <View>   
                    <View style={{borderBottomWidth: 5, borderBottomColor: "rgba(255,187,46,1)" ,width: 40}}>
                    </View>
                    <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "rgba(255,187,46,1)" ,width: 30}}>
                    </View>
                    <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "rgba(255,187,46,1)" ,width: 20}}>
                    </View>
                     </View>
                    </TouchableOpacity>
                </View>
                 <TouchableOpacity  onPress={()=> this.setModalVisible(true)}>
                    <View style={{flexDirection: 'row',flex: 0.7,borderRadius: 30, padding: 10,backgroundColor: '#fff',marginBottom: 5,alignItems: 'center',justifyContent: 'center'}}>
                        <PlusIcon name='plus' style={{paddingRight: 8}} size={25} color='rgba(255,187,46,1)'/>
                        <Text style={{alignSelf: 'center',paddingRight: 8, color: 'rgba(255,187,46,1)', fontSize: 18,fontWeight: 'bold'}}>BILLING METHOD</Text>
                    </View> 
                </TouchableOpacity>
                <Dialog
              visible={this.state.visible}
              height={0.85}
              width ={width}
              onTouchOutside={()=> this.setModalVisible(false)}
              onHardwareBackPress={()=> this.setModalVisible(false)}
              dialogStyle={{position: 'absolute', bottom: 50}}
              dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
              })}
            >
              <DialogContent>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{borderBottomWidth: 4, borderBottomColor: "rgba(255,187,46,0.5)" ,width: 60, marginTop: 10}}></View>
                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 20,color: 'rgba(109,109,109,1)',fontWeight: '600'}}>PAYMENT</Text>
                    </View>
                  </View>

                  <View style={{marginTop: 5}}>
                      <View style={{marginTop: 8,flexDirection: 'row',justifyContent: 'space-between'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Order Subtotal</Text>
                          <Text style={{color: 'rgba(166,166,166,1)',marginTop:4,fontSize: 12}}>$162.99</Text>
                      </View>

                      <View style={{marginTop: 8,flexDirection: 'row',justifyContent: 'space-between'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Drop off Fee</Text>
                          <Text style={{color: 'rgba(166,166,166,1)',marginTop:4,fontSize: 12}}>$12.99</Text>
                      </View>

                      <View style={{marginTop: 8,flexDirection: 'row',justifyContent: 'space-between'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Service Fees -</Text>
                          <Text style={{color: 'rgba(166,166,166,1)',marginTop:4,fontSize: 12}}>$5.99</Text>
                      </View>

                      <View style={{marginTop: 18,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>

                      
                      <View style={{marginTop: 8,flexDirection: 'row',justifyContent: 'space-between'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',fontSize: 18,fontWeight: '500'}}>Total Price</Text>
                          <Text style={{color: 'rgba(89,89,89,1)',marginTop:4,fontSize: 15}}>$181.97</Text>
                      </View>

                      <View style={{marginTop: 18,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>
                  </View>

                   <View style={{justifyContent: 'center',marginTop: 10, alignItems: 'center'}}>
                       <Text  style={{color: 'rgba(109,109,109,1)',marginTop:4,fontSize: 18}}>Payment Method</Text>
                   </View>

                <View style={{marginTop: 8,borderWidth: 1,borderColor: 'rgba(151,151,151,0.5)',borderRadius: 10, padding: 15,backgroundColor: 'rgba(216,216,216,1)'}}>
                  <TouchableOpacity>
                   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <View style={{marginRight: 20}}>
                        <Image source={Visa} style={{width: 50,height: 30}} />
                      </View>
                      <View style={{marginTop: 2}}>
                        <Text style={{color: 'rgba(85,85,85,1)',fontSize: 18}}>XXXX - 3049</Text>
                      </View>
                   </View>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 8,borderWidth: 1,borderColor: 'rgba(151,151,151,0.5)',borderRadius: 10, padding: 15,backgroundColor: 'rgba(216,216,216,1)'}}>
                  <TouchableOpacity>
                   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <View style={{}}>
                        <Image source={Paypal} style={{width: 114,height: 30}} />
                      </View>
                   </View>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 8,borderWidth: 1,borderColor: 'rgba(151,151,151,0.5)',borderRadius: 10, padding: 15,backgroundColor: 'rgba(216,216,216,1)'}}>
                  <TouchableOpacity>
                   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <View style={{marginRight: 20}}>
                        <Image source={Apple} style={{width: 30,height: 30}} />
                      </View>
                      <View style={{marginTop: 5}}>
                        <Text style={{color: 'rgba(85,85,85,1)',fontSize: 18}}>Apple Pay</Text>
                      </View>
                   </View>
                  </TouchableOpacity>
                </View>




                   <View style={{marginBottom: 5,elevation: 2,
                    borderRadius: 10, padding: 18,backgroundColor: 'rgba(76,182,177,1)', marginTop: 25}}>
                        <TouchableOpacity>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>CONFIRM RENTAL</Text>
                        </TouchableOpacity>
                    </View>  
                </ScrollView>
                
              </DialogContent>
            </Dialog>
               
            </View>

            <View style={{marginTop: 30,marginHorizontal: 15}}>
                <View>
                    <Text style={{alignSelf: 'center', color: 'rgba(80,80,80,1)', fontSize: 20,fontWeight: 'bold'}}>PRIMARY PAYMENT METHOD</Text>
                </View>

                <View style={{backgroundColor: '#fff',marginTop: 30,height: 150, borderRadius: 20}}>
                    <View style={{margin: 20}}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{color: 'rgba(51,51,51,0.65)',fontSize: 15}}>Name: John Doenathan</Text>
                                <Text style={{color: 'rgba(51,51,51,0.65)',fontSize: 15,lineHeight: 30}}>Card: VISA ****4912	</Text>
                            </View>

                            <View>
                                <Image source={Visa} style={{width: 40,height: 30,alignSelf: 'flex-end'}}/>
                                <Text style={{color: 'rgba(114,114,114,0.65)',fontSize: 12}}>EXP 03/2044</Text>
                            </View>
                        </View>

                        <View style={{marginTop: 20,margin: 25}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                <View style={{borderRadius: 20,padding: 6,flex: 0.47,backgroundColor: 'rgba(240,240,240,1)'}}>
                                    <TouchableOpacity>
                                            <Text style={{color: 'rgba(80,80,80,1)',alignSelf: 'center'}}>EDIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                <View style={{borderRadius: 20,padding: 6,flex: 0.47,backgroundColor: 'rgba(240,240,240,1)'}}>
                                    <TouchableOpacity>
                                        <Text style={{color: 'rgba(80,80,80,1)',alignSelf: 'center'}}>REMOVE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{borderWidth: 1,width: 80,alignSelf: "center",marginTop: 25,borderColor: 'rgba(151,151,151,0.3)'}}></View>

                <View style={{backgroundColor: '#fff',marginBottom: 15,marginTop: 25,height: 150, borderRadius: 20}}>
                    <View style={{margin: 20}}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View>
                                <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Paypal Verified</Text>
                                <Text style={{color: 'rgba(51,51,51,0.65)',fontSize: 15,lineHeight: 30}}>Account: johndoe@gmail.com</Text>
                            </View>

                            <View>
                                <Image source={Paypal} style={{width: 80,height: 20,alignSelf: 'flex-end'}}/>
                                
                            </View>
                        </View>

                        <View style={{marginTop: 20,margin: 25}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                <View style={{borderRadius: 20,padding: 6,flex: 0.47,backgroundColor: 'rgba(240,240,240,1)'}}>
                                    <TouchableOpacity>
                                        <Text style={{color: 'rgba(80,80,80,1)',alignSelf: 'center'}}>EDIT</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={{borderRadius: 20,padding: 6,flex: 0.47,backgroundColor: 'rgba(240,240,240,1)'}}>
                                    <TouchableOpacity>
                                        <Text style={{color: 'rgba(80,80,80,1)',alignSelf: 'center'}}>REMOVE</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
  }
}

export default PaymentOptions
