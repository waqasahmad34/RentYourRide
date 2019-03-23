import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'
export class GetPaid extends Component {
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


            <View style={{marginTop: 30,marginHorizontal: 20,marginBottom: 10}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '31%',alignItems: 'center',height: 105,borderRadius: 20,elevation: 4}}>
                        <Text style={{color: 'rgba(56,141,137,1)',fontWeight: '500',fontSize: 20,alignSelf: 'center'}}>$75</Text>
                        <Text style={{color: 'rgba(86,86,86,1)',marginTop: 10,alignSelf: 'center'}}>In Progress</Text>
                    </View>

                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '31%',alignItems: 'center',height: 105,borderRadius: 20,elevation: 4}}>
                        <Text style={{color: 'rgba(56,141,137,1)',fontWeight: '500',fontSize: 20,alignSelf: 'center'}}>$0.00</Text>
                        <Text style={{color: 'rgba(86,86,86,1)',marginTop: 10,alignSelf: 'center'}}>Pending</Text>
                    </View>


                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '31%',alignItems: 'center',height: 105,borderRadius: 20,elevation: 4}}>
                        <Text style={{color: 'rgba(56,141,137,1)',fontWeight: '500',fontSize: 20,alignSelf: 'center'}}>$99.00</Text>
                        <Text style={{color: 'rgba(86,86,86,1)',marginTop: 10,alignSelf: 'center'}}>Available</Text>
                    </View>
                </View>


                <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',marginTop: 20,alignItems: 'center',
                    borderRadius: 20,elevation: 4}}>
                       
                       <View style={{marginTop: 20}}>
                            <Text style={{color: 'rgba(86,86,86,1)',fontSize: 20,alignSelf: 'center'}}>Get Paid Now</Text>
                       </View>

                       <View style={{marginTop: 10}}>
                            <Text style={{color: 'rgba(180,180,180,1)',alignSelf: 'center'}}>You have <Text style={{fontSize: 16,fontWeight: '500',color: 'rgba(255 ,187,44,1)'}}>$334</Text> ready for withdrawl</Text>
                       </View>

                       <View style={{marginTop: 25,width: '40%',borderBottomColor: 'rgba(151,151,151,0.3)',borderBottomWidth: 2}}>
                           
                       </View>
                       
                       <View style={{marginBottom: 20,width: '70%',elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(76,182,177,1)', marginTop: 25}}>
                        <TouchableOpacity>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>GET PAID NOW</Text>
                        </TouchableOpacity>
                        </View> 
                </View>


                <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',marginTop: 20,alignItems: 'center',
                    borderRadius: 20,elevation: 4}}>
                       
                       <View style={{marginTop: 20}}>
                            <Text style={{color: 'rgba(86,86,86,1)',fontSize: 20,alignSelf: 'center'}}>Payment History</Text>
                       </View>

                       <View style={{marginTop: 20,width: '25%',borderBottomColor: 'rgba(151,151,151,0.3)',borderBottomWidth: 2}}>
                           
                       </View>
                    
                           
                       <View style={{marginBottom: 5,marginLeft: '16%',width: '70%',alignSelf: 'flex-start',padding: 8,backgroundColor: 'rgba(216,216,216,1)', marginTop: 25}}>
                        
                        </View> 
 
                        <View style={{marginBottom: 5,marginLeft: '16%',width: '40%',alignSelf: 'flex-start',padding: 8,backgroundColor: 'rgba(216,216,216,1)', marginTop: 5}}>
                         
                        </View> 
                        <View style={{marginBottom: 25,marginLeft: '16%',alignSelf: 'flex-start',width: '60%',padding: 8,backgroundColor: 'rgba(216,216,216,1)', marginTop: 5}}>
                         
                        </View> 
                    

                       
                </View>
            </View>    

            
      </ScrollView>
    )
  }
}

export default GetPaid
