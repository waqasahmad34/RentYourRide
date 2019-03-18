import React, { Component } from 'react'
import { Text, Image ,View , TouchableOpacity,ScrollView,CheckBox } from 'react-native'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import CarImage from '../../assets/car3.jpg'
import UploadPic from '../../assets/image_upload_variant.png'



import {Thumbnail} from 'native-base'
import ExchangeIcon from '../../assets/exchange.png'



const images = [
    require('../../assets/car1.jpg'),
    require('../../assets/car2.jpg'),
    require('../../assets/car3.jpg'),
    require('../../assets/car4.jpg'),
    require('../../assets/car2.jpg'),
    
   
  ]


export class RentalAgreement extends Component {

    renderImages = () =>{
        return images.map((image,index)=>{
          return(
            <View key={index} style={[{width: 100},{height: 100},
            {marginLeft: 3},{marginBottom: 5},
            index === 0 ? {borderWidth: 2,borderColor: 'rgba(255,187,46,1)'} : {borderWidth: 1,borderColor: 'rgba(80,80,80,1)'}]}>
              <Image style={{resizeMode: 'cover',flex: 1,width: null,height: null}}
              source={image}/>
            </View>
            
          )
        })
      }

    render() {
        return (
          <View style={{backgroundColor: 'rgba(247,243,247,1)',flex: 1}}>
            <View style={{marginTop: 15}}>
               <View style={{position: 'absolute',padding: 7,left: 20}}>
                    <TouchableOpacity>
                      <ArrowIcon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                    </TouchableOpacity>
               </View>
               <View style={{marginLeft: 10,marginTop: 15,justifyContent: 'center', alignItems: 'center'}}>
                
                  <Text style={{alignSelf: 'center',fontSize: 20,color: 'rgba(92,92,92,1)'}}>PENDING APPROVAL</Text>
                  
               </View>
            </View>
            <ScrollView>
            <View style={{marginTop: 50,marginHorizontal: 10}}>
                
                    <View style={{backgroundColor: '#fff',marginBottom: 20, borderRadius: 20,height: 280,flexWrap: 'wrap'}}>
                        <View style={{margin: 10}}>
                            
                          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{}}>
                                <Thumbnail style={{marginLeft: 5}} large source={CarImage}/>
                                <Text style={{color: 'rgba(92,92,92,1)',marginTop: 3,fontWeight: '500',alignSelf: 'center'}}>Joe Mackenzie</Text>
                            </View>
                           <View style={{alignItems: 'center',justifyContent: 'center'}}>
                               <Image source={ExchangeIcon} style={{width: 25,alignSelf: 'center', height: 25}}/>
                           </View>

                           <View style={{}}>
                                <Thumbnail style={{}} large source={CarImage}/>
                                <Text style={{color: 'rgba(92,92,92,1)',marginTop: 3,fontWeight: '500',alignSelf: 'center'}}>Jack Doe</Text>
                            </View>
                          </View>
                        </View>
    
    
                        <View style={{borderRadius: 20,marginTop: 10,padding: 10,borderWidth: 1,borderColor: 'rgba(255,187,46,1)',borderStyle: 'dashed',marginHorizontal: 15,backgroundColor: 'rgba(255,187,46,0.29)'}}>
                          <Text style={{color: 'rgba(255,172,0,1)',alignSelf: 'center'}}>From Jan 24th 1:00PM - Feb 11th 2:00PM</Text>
                        </View>
    
                        <View style={{marginHorizontal: 15,marginTop: 15}}>
                            <Text style={{color: 'rgba(6,6,6,0.8)',fontWeight: '500',paddingLeft: 10}}>CURRENT MILEAGE</Text>
                            <View style={{borderColor: 'rgba(163,163,163,1)',borderRadius: 5,
                            borderWidth: 1,padding: 15,marginTop: 10,backgroundColor: 'rgba(249,249,249,1)'}}>
                            <Text style={{color: 'rgba(6,6,6,1)',paddingLeft: 5}}>423,000 Kilometres</Text>
                            </View>
                        </View>
    
                    </View>
               
            </View>


            <View style={{marginTop: 5,marginHorizontal: 10}}>
                
                <View style={{backgroundColor: '#fff',marginBottom: 20, borderRadius: 20,flexWrap: 'wrap'}}>
                    
                   <View style={{margin: 12}}>
                    <View>
                            <View style={{marginTop: 5,justifyContent: 'center',alignItems: 'center'}}>
                                <Text style={{color: 'rgba(92,92,92,1)',fontSize: 20}}>PICTURE DOCUMENTATION</Text>
                            </View>
                            <View style={{marginTop: 5,justifyContent: 'center',alignItems: 'center'}}>
                                <Text style={{color: 'rgba(182,182,182,0.8)'}}>Take pictures of the car from all angles</Text>
                            </View>
                        </View>

                       
                        <View style={{flexDirection: 'row',marginTop: 8,flexWrap: 'wrap'}}>
                                {this.renderImages()}
                                <TouchableOpacity>
                                    <View style={{borderWidth: 1,marginLeft: 3,
                                    borderColor: 'rgba(80,80,80,1)',width: 100,
                                    height: 100,backgroundColor: 'rgba(244,243,247,1)',justifyContent: 'center',alignItems: 'center'}}>
                                    <Image source={UploadPic} style={{width: 35,height: 35,marginTop: 10,alignSelf: "center"}}/>
                                    <Text style={{color: 'rgba(77,77,77,1)',fontSize: 16,marginTop: 5,alignSelf: 'center'}}>UPLOAD</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                       
                   </View>

                </View>
           
        </View>



        <View style={{marginTop: 5,marginHorizontal: 10}}>
                
                <View style={{backgroundColor: '#fff',marginBottom: 20, borderRadius: 20,flexWrap: 'wrap'}}>
                    
                   <View style={{margin: 12}}>
                         <View>
                            <View style={{marginTop: 5,justifyContent: 'center',alignItems: 'center'}}>
                                <Text style={{color: 'rgba(92,92,92,1)',fontSize: 20}}>CONDITION VERIFICATION</Text>
                            </View>
                            <View style={{marginTop: 5,justifyContent: 'center',alignItems: 'center'}}>
                                <Text style={{color: 'rgba(182,182,182,0.8)'}}>Please ensure these conditions are met</Text>
                            </View>
                        </View>

                       <View style={{marginTop: 10}}>
                       <View style={{flexDirection: 'row'}}>
                            <View>
                            <CheckBox/>
                            </View>
                            <View style={{marginTop: 5,marginLeft: 5,alignContent: 'center',justifyContent: 'center'}}>
                            <Text style={{color: 'rgba(76,182,177,1)'}}>The vehicle has been throughly inspected and 
washed and is in a good condition for rental.</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <View>
                            <CheckBox/>
                            </View>
                            <View style={{marginTop: 5,marginLeft: 5,alignContent: 'center',justifyContent: 'center'}}>
                            <Text style={{color: 'rgba(76,182,177,1)'}}>I confirm both parties agree to the <Text style={{textDecorationLine: 'underline'}}>terms and
conditions</Text> of RentYourRide </Text>
                            </View>
                        </View>

                       </View>

                      
                       
                   </View>

                </View>
           
        </View>
           
            </ScrollView>
          </View>
        )
      }
}

export default RentalAgreement
