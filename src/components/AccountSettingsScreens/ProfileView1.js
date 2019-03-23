import React, { Component } from 'react'
import { Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import CarImage from '../../assets/car2.jpg'
import {Thumbnail} from 'native-base'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'
import ReviewsImage from '../../assets/reviews.png'
import StarImage from '../../assets/star.png'
import RidesImage from '../../assets/rides.png'
import ChevronIcon from 'react-native-vector-icons/Entypo'


class ProfileView1 extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor: 'rgba(244,243,247,1)'}}>
            
            <View style={{marginHorizontal: 20, marginTop: 35, flexDirection: 'row',justifyContent: 'space-between'}}>
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
            </View>


            <View style={{marginTop: 10,marginHorizontal: 20,marginBottom: 10}}>
               <View style={{backgroundColor: '#fff',
                    marginTop: 15,
                    borderRadius: 20,elevation: 4}}>
                   <View style={{margin: 20}}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                            <Thumbnail large source={CarImage}/>
                        </View>
                        <View style={{paddingLeft: 15,paddingTop: 10}}>
                            <Text style={{color: 'rgba(86,86,86,1)',paddingLeft: 4,fontSize: 22}}>John Doe</Text>
                            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                                <LocationIcon name='location-pin' size={15} color='rgba(76,182,177,1)'/>
                                <Text style={{color: 'rgba(153,153,153,1)',paddingLeft: 5,fontSize: 18}}>Winnipeg, Manitoba</Text>
                            </View>
                        </View>
                      </View>

                       <View style={{padding: 15}}>
                           <Text style={{color: 'rgba(153,153,153,1)'}}>Lorem ipsum dolor sit amet adipiscing elit. Etiam 
pellentesque sed iaculis.</Text>
                       </View>

                       <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                           <View  style={{padding: 5}}>
                                <Image source={RidesImage} style={{width: 25,alignSelf: 'center',height: 20}}/>
                                <View style={{flexDirection: 'row',paddingLeft:15,paddingTop: 5}}>
                                    <Text style={{alignSelf: 'center',color: 'rgba(47,47,47,1)'}}>RIDES</Text>
                                    <ChevronIcon name='chevron-small-right' size={24} color='rgba(47,47,47,1)'/>
                                </View>
                           </View>

                           <View style={{height: 40,borderLeftWidth: 1.2,marginRight: '10%',borderLeftColor: 'rgba(229,229,229,0.8)'}}></View>
                           <View  style={{padding: 5}}>
                                <Image source={StarImage} style={{width: 22,alignSelf: 'center',height: 22}}/>
                                <View style={{flexDirection: 'row',paddingTop: 7}}>
                                    <Text style={{alignSelf: 'center',color: 'rgba(47,47,47,1)'}}>4.5/5</Text>
                                   
                                </View>
                           </View>
                            <View style={{height: 40,borderLeftWidth: 1.2,marginLeft: '13%',borderLeftColor: 'rgba(229,229,229,0.8)'}}></View>
                           <View style={{padding: 5}}>
                                <Image source={ReviewsImage} style={{width: 22,alignSelf: 'center',height: 22}}/>
                                <View style={{flexDirection: 'row',paddingLeft:10,paddingTop: 3}}>
                                    <Text style={{alignSelf: 'center',color: 'rgba(47,47,47,1)'}}>REVIEWS</Text>
                                    <ChevronIcon name='chevron-small-right' size={24} color='rgba(47,47,47,1)'/>
                                </View>
                           </View>
                       </View>
                   </View>
               </View>

                <View style={{marginTop: 15,marginLeft: '8%'}}>
                    <Text style={{color: 'rgba(97,97,97,1)',fontSize: 15}}>BASIC INFORMATION</Text>
                </View>

                <View style={{backgroundColor: '#fff',
                    borderRadius: 20,marginTop: 15,elevation: 4}}>
                       
                       
                    <TouchableOpacity>
                       <View style={{flexDirection: 'row',padding: 20,justifyContent: 'space-between'}}>
                            <Text style={{color: 'rgba(69,69,69,1)',fontSize: 15,fontWeight: '500'}}>Full Name</Text>
                            <Text style={{color: 'rgba(176,176,176,1)',fontSize: 15}}>John Doe</Text>
                       </View>
                    </TouchableOpacity>

                    <View style={{borderTopWidth: 1,borderTopColor: 'rgba(235,235,235,0.6)'}}></View>

                    <TouchableOpacity>
                       <View style={{flexDirection: 'row',padding: 20,justifyContent: 'space-between'}}>
                            <Text style={{color: 'rgba(69,69,69,1)',fontSize: 15,fontWeight: '500'}}>Location</Text>
                            <Text style={{color: 'rgba(176,176,176,1)',fontSize: 15}}>Winnipeg</Text>
                       </View>
                    </TouchableOpacity>

                    <View style={{borderTopWidth: 1,borderTopColor: 'rgba(235,235,235,0.6)'}}></View>


                    <TouchableOpacity>
                       <View style={{flexDirection: 'row',padding: 20,justifyContent: 'space-between'}}>
                            <Text style={{color: 'rgba(69,69,69,1)',fontSize: 15,fontWeight: '500'}}>Email</Text>
                            <Text style={{color: 'rgba(176,176,176,1)',fontSize: 15}}>johndoe@gmail.com</Text>
                       </View>
                    </TouchableOpacity>

                      
                </View>




                <View style={{marginTop: 15,marginLeft: '8%'}}>
                    <Text style={{color: 'rgba(97,97,97,1)',fontSize: 15}}>SETTINGS</Text>
                </View>

                <View style={{backgroundColor: '#fff',
                    borderRadius: 20,marginTop: 15,elevation: 4}}>
                       
                       
                    <TouchableOpacity>
                       <View style={{padding: 20}}>
                            <Text style={{color: 'rgba(69,69,69,1)',fontSize: 15,fontWeight: '500'}}>Change Password</Text>
                            
                       </View>
                    </TouchableOpacity>

                    <View style={{borderTopWidth: 1,borderTopColor: 'rgba(235,235,235,0.6)'}}></View>

                    <TouchableOpacity>
                       <View style={{padding: 20}}>
                            <Text style={{color: 'rgba(69,69,69,1)',fontSize: 15,fontWeight: '500'}}>Change Password</Text>
                       </View>
                    </TouchableOpacity>

                    <View style={{borderTopWidth: 1,borderTopColor: 'rgba(235,235,235,0.6)'}}></View>


                    <TouchableOpacity>
                       <View style={{padding: 20}}>
                            <Text style={{color: 'rgba(69,69,69,1)',fontSize: 15,fontWeight: '500'}}>Billing Methods</Text>
                       </View>
                    </TouchableOpacity>

                      
                </View>


               
            </View>    

            
      </ScrollView>
    )
  }
}

export default ProfileView1
