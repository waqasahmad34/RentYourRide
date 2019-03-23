import React, { Component } from 'react'
import { Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'
import ExchangeIcon from '../../assets/exchange.png'
import {Radio,Picker} from 'native-base'
import WalletIcon from '../../assets/wallet.png'



export class GetPaidFinal extends Component {


  constructor(props){
    super(props)
    this.state={
      accountType: undefined
    
    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor: 'rgba(244,243,247,1)'}}>
            
            <View style={{marginHorizontal: 20, marginTop: 50, flexDirection: 'row',justifyContent: 'space-between'}}>
                    <View style={{marginTop: 10,marginLeft: 10}}>
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
                 <TouchableOpacity >
                    <View style={{flex: 0.8,borderRadius: 30, padding: 15,backgroundColor: '#fff'}}>
                        <LocationIcon name='location-pin' style={{alignSelf: 'center'}} size={25} color='rgba(255,187,46,1)'/>
            
                    </View> 
                </TouchableOpacity> 
            </View>


            <View style={{marginTop: 10,marginHorizontal: 20,marginBottom: 10}}>

                <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',marginTop: 20,alignItems: 'center',
                    borderRadius: 20,elevation: 4}}>
                       <View style={{position: 'relative',bottom: 35}}>
                         <Image source={WalletIcon} style={{width: 70,height: 70}}/>
                       </View>
                       <View>
                            <Text style={{color: 'rgba(86,86,86,1)',fontSize: 20,alignSelf: 'center'}}>Select Payment Method</Text>
                       </View>

                       <View style={{marginTop: 10}}>
                            <Text style={{color: 'rgba(180,180,180,1)',alignSelf: 'center'}}>You have <Text style={{fontSize: 16,fontWeight: '500',color: 'rgba(255 ,187,44,1)'}}>$334</Text> ready for withdrawl</Text>
                       </View>

                       
                       <View style={{height: 50,marginBottom: 25,width: '85%',flexDirection: 'row',marginTop: 25, borderWidth: 1, backgroundColor: 'rgba(249,249,249,1)', borderColor: 'rgba(163,163,163,1)', borderRadius: 4}}>
                         <View style={{flex: 1}}>
                         <Picker
                              mode="dropdown"
                              style={{ width: undefined }}                             
                              selectedValue={this.state.accountType}
                              onValueChange={(accountType) =>
                                this.setState({accountType: accountType})
                              }
                            >
                              <Picker.Item label="Skrill" value="key0" />
                              <Picker.Item label="Paypal" value="key1" />
                              <Picker.Item label="Payoneer" value="key2" />
                            </Picker>
                         </View>
                        </View>
                </View>





                <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',marginTop: 20,alignItems: 'center',
                    borderRadius: 20,elevation: 4}}>
                       
                       <View style={{marginTop: 20}}>
                            <Text style={{color: 'rgba(86,86,86,1)',fontSize: 20,alignSelf: 'center'}}>Payment Options</Text>
                       </View>

                      

                       <View style={{marginTop: 15,marginBottom: 25}}>
                           <View style={{alignItems: 'center',flexDirection: 'row'}}>
                            <Radio selectedColor='rgba(255,187,46,1)' color='rgba(229,229,229,0.66)' style={{marginRight: '8%'}} selected={true} />
                            <Text style={{color: 'rgba(180 ,180,180,1)'}}>Available Balance <Text style={{fontSize: 16,color: 'rgba(255 ,187,46,1)',fontWeight: '500'}}>$334</Text></Text>
                           </View>

                           

                           <View style={{marginTop: 10,alignItems: 'center',flexDirection: 'row'}}>
                            <Radio selectedColor='rgba(255,187,46,1)' color='rgba(229,229,229,0.66)' style={{marginRight: '8%'}} selected={false} />
                            <Text style={{color: 'rgba(180 ,180,180,1)'}}>Enter Specific Amount</Text>
                           </View>

                       </View>

                </View>




                <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',marginTop: 20,alignItems: 'center',
                    borderRadius: 20,elevation: 4}}>
                       
                       <View style={{marginTop: 20}}>
                            <Text style={{color: 'rgba(86,86,86,1)',fontSize: 20,alignSelf: 'center'}}>Confirm Payment</Text>
                       </View>

                       <View style={{marginTop: 10}}>
                            <Text style={{color: 'rgba(180,180,180,1)',alignSelf: 'center'}}>Last exchange rate: <Text style={{fontSize: 16,fontWeight: '500',color: 'rgba(255 ,187,44,1)'}}>1.50 </Text>EUR/CAD</Text>
                            
                        </View>

                       <View style={{marginTop: 15,marginBottom: 25,flexDirection: 'row',justifyContent: 'space-between'}}>
                           <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20,fontWeight: '500',color: 'rgba(255 ,187,46,1)'}}>334</Text>
                            <Text style={{color: 'rgba(152 ,152,152,1)'}}>EUR</Text>
                           </View>

                           <View style={{alignItems: 'center',marginLeft: '10%',marginRight: '10%',justifyContent: 'center'}}>
                               <Image source={ExchangeIcon} style={{width: 25,alignSelf: 'center', height: 15}}/>
                           </View>

                           <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20,fontWeight: '500',color: 'rgba(255 ,187,46,1)'}}>501</Text>
                            <Text style={{color: 'rgba(152 ,152,152,1)'}}>CAD</Text>
                           </View>

                       </View>

                </View>



                <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',marginTop: 20,alignItems: 'center',
                    borderRadius: 20,elevation: 4}}>
                       
                       <View style={{marginTop: 20}}>
                            <Text style={{color: 'rgba(86,86,86,1)',fontSize: 20,alignSelf: 'center'}}>Summary</Text>
                       </View>

                       <View style={{marginTop: 10,flexDirection: 'row'}}>
                            <Text style={{color: 'rgba(180,180,180,1)',alignSelf: 'center'}}>You’re about to deposit <Text style={{fontSize: 16,fontWeight: '500',color: 'rgba(255 ,187,44,1)'}}>$501</Text></Text>
                            <Text style={{color: 'rgba(180,180,180,1)',paddingTop: 4,fontSize: 12}}>CAD</Text>
                        </View>

                       <View style={{marginBottom: 25,marginTop:5}}>
                            <Text style={{color: 'rgba(180,180,180,1)',alignSelf: 'center'}}>into your <Text style={{fontSize: 16,fontWeight: '500',color: 'rgba(133 ,133,133,1)'}}>Scotiabank Account.</Text></Text>
                       </View>

                </View>

                <View style={{elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(76,182,177,1)', marginTop: 20}}>
                 <TouchableOpacity>
                   <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>Confirm Deposit</Text>
                 </TouchableOpacity>
              </View> 


              <View style={{marginBottom: 5,elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(150,150,150,1)', marginTop: 20}}>
                 <TouchableOpacity>
                   <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>Cancel</Text>
                 </TouchableOpacity>
              </View> 
            </View>    

            
      </ScrollView>
    )
  }
}

export default GetPaidFinal
