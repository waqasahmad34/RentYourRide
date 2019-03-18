import React, { Component } from 'react'
import { Text,Image, View,ScrollView } from 'react-native'
import Car from '../../assets/Car.png'
import ActiveRentals from '../../assets/active_rentals.png'
import RentalAgreements from '../../assets/rental_agreements.png'
import RentalRequests from '../../assets/rental_requests.png'
import RentalClaims from '../../assets/rental_claims.png'
import RentalHistory from '../../assets/rental_history.png'

export class RentalManagement extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'rgba(244,243,247,1)',flex: 1}}>
        <ScrollView>
            <View style={{marginTop: 30}}>
              <Text style={{alignSelf: 'center',color: 'rgba(92,92,92,1)',fontSize: 20,fontWeight: '500'}}>RENTAL MANAGER</Text>
            </View>

            <View style={{marginTop: 50,marginHorizontal: 20}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '45%',alignItems: 'center',height: 130,borderRadius: 20,elevation: 4}}>
                        <Image source={Car} style={{width: 50,height: 50}} />
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center',marginTop: 10}}>LIST A</Text>
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center'}}>NEW RIDE</Text>
                    </View>

                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '45%',alignItems: 'center',height: 130,borderRadius: 20,elevation: 4}}>
                        <Image source={ActiveRentals} style={{width: 50,height: 40,marginTop: 45}} />
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center',marginTop: 10}}>ACTIVE</Text>
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center'}}>RENTALS</Text>
                        <View style={{position: 'relative',backgroundColor: 'rgba(255,93,46,1)'
                        ,borderRadius: 30,bottom: 130,left: '45%',padding: 10,width: 40}}>
                            <Text style={{color: '#fff',alignSelf: 'center',fontWeight: '500'}}>3</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '45%',alignItems: 'center',height: 130,borderRadius: 20,elevation: 4}}>
                        <Image source={RentalAgreements} style={{width: 40,height: 40}} />
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center',marginTop: 10}}>RENTAL</Text>
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center'}}>AGREEMENTS</Text>
                        
                    </View>

                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '45%',alignItems: 'center',height: 130,borderRadius: 20,elevation: 4}}>
                        <Image source={RentalRequests} style={{width: 45,height: 40}} />
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center',marginTop: 10}}>RENTAL</Text>
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center'}}>REQUESTS</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row',marginTop: 20,marginBottom: 20,justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '45%',alignItems: 'center',height: 130,borderRadius: 20,elevation: 4}}>
                        <Image source={RentalClaims} style={{width: 40,height: 40}} />
                        <Text style={{color: 'rgba(44,44,44,1)',marginTop: 10}}>RENTAL</Text>
                        <Text style={{color: 'rgba(44,44,44,1)'}}>CLAIMS</Text>
                    </View>

                    <View style={{backgroundColor: '#fff',
                    justifyContent: 'center',width: '45%',alignItems: 'center',height: 130,borderRadius: 20,elevation: 4}}>
                        <Image source={RentalHistory} style={{width: 45,height: 40,marginRight: 10}} />
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center',marginTop: 10}}>RENTAL</Text>
                        <Text style={{color: 'rgba(44,44,44,1)',alignSelf: 'center'}}>HISTORY</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default RentalManagement
