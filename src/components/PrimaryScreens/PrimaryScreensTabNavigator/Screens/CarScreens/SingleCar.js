import React, { Component } from 'react'
import { Text, View,ScrollView ,Image} from 'react-native'
import car1 from '../../../../../assets/car1.jpg'
import car2 from '../../../../../assets/car2.jpg'
import car3 from '../../../../../assets/car3.jpg'
import car4 from '../../../../../assets/car4.jpg'
import SingleCarImageSlider from '../common/SingleCarImageSlider'
import {Thumbnail} from 'native-base'
import ChevronIcon from 'react-native-vector-icons/Entypo'
import StarRating from 'react-native-star-rating'
import CarDoorIcon from '../../../../../assets/car-door.png'
import CarSeatIcon from '../../../../../assets/seats.png'
import CarEngineIcon from '../../../../../assets/engine.png'
import ViewMoreText from 'react-native-view-more-text'
import MapView  from 'react-native-maps'

export class SingleCar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      starCount: 4
    }
  }

  renderViewMore = (onPress) => {
    return(
      <Text onPress={onPress} style={{color: 'rgba(255,178,20,1)',alignSelf: 'center'}}>VIEW MORE</Text>
    )
  }
  renderViewLess = (onPress) => {
    return(
      <Text onPress={onPress} style={{color: 'rgba(255,178,20,1)',alignSelf: "center"}}>VIEW LESS</Text>
    )
  }

  onStarRatingPress= (rating)=> {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
       
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop: 15}}>
                <Text style={{color: 'rgba(100,97,97,1)',fontSize: 20,fontWeight: '500'}}> Mercedes-benz C-Class </Text>
            </View>

            <View style={{marginTop: 20,alignItems: 'center',justifyContent: 'center'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SingleCarImageSlider img={car1}/>
                    <SingleCarImageSlider img={car2}/>
                    <SingleCarImageSlider img={car3}/>
                    <SingleCarImageSlider img={car4}/>

                </ScrollView>
                
            </View>

            <View style={{flexDirection: 'row',padding: 10,marginTop: 10}}>
                <View style={{}}>
                    <Thumbnail large source={car2}/>
                </View>
                <View style={{flex: 1,flexDirection: 'row',padding: 10}}>
                    <Text style={{color: 'rgba(56,68,97,1)',fontSize: 18,fontWeight: '500'}}>Moe Jackson</Text>
                    <ChevronIcon style={{marginTop:1}} name='chevron-small-right' color='rgba(56,68,97,1)' size={25}/>
                    <View style={{position: 'absolute',top: 35,left:15}}>
                      <Text style={{color: 'rgba(160,160,160,1)',alignSelf: 'center'}}>OWNER</Text>
                    </View>
                </View>

               
                
                <View style={{padding: 10,marginTop: 5}}>
                    <View style={{alignSelf: 'flex-end'}}>
                        <Text style={{color: 'rgba(160,160,160,1)',alignSelf: 'center'}}>RATING</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 4}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        starSize={15}
                        fullStarColor='rgba(255,178,20,1)'
                        emptyStarColor='rgba(255,178,20,1)'
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                      />       
                    </View>
                </View>
            </View>

          <View style={{marginHorizontal: 20}}>

            <View style={{marginTop: 10, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{padding: 15,width: '50%'}}>
                    <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15,fontWeight: '500'}}>From</Text>
                    <Text style={{color: 'rgba(102,102,102,1)',fontSize: 10}}>JAN 20TH, 2019 - 12:00 AM</Text>
                  </View>
                  <View style={{padding: 15,width: '50%',borderLeftWidth: 2, borderLeftColor: 'rgba(151,151,151,0.21)'}}>
                    <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15,fontWeight: '500'}}>Until</Text>
                    <Text style={{color: 'rgba(102,102,102,1)',fontSize: 10}}>JAN 26TH, 2019 - 9:00 PM</Text>
                  </View>
                </View>
            </View>


            <View style={{marginTop: 20, borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                
                <View style={{padding: 15,width: '50%'}}>
                  <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15,fontWeight: '500'}}>Location</Text>
                  <Text style={{color: 'rgba(102,102,102,1)',fontSize: 10}}>Winnipeg, MB R8N1P1</Text>
                </View>
              
            </View>

            <View style={{marginTop: 15,flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Kilometres Included</Text>
              <Text style={{color: 'rgba(89,89,89,1)',fontSize: 15}}>165</Text>
            </View>
            <View style={{marginTop: 5,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>


            <View style={{marginTop: 15,flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Monthly Discount</Text>
              <Text style={{color: 'rgba(89,89,89,1)',fontSize: 15}}>15%</Text>
            </View>

            <View style={{marginTop: 6,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>



            <View style={{marginTop: 15,flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Kilometres Overage Fee*</Text>
              <Text style={{color: 'rgba(89,89,89,1)',fontSize: 15}}>$ 1.00/KM</Text>
            </View>
            <View style={{marginTop: 6,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>






            <View style={{marginTop: 20,flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{justifyContent: 'center',elevation: 2,alignItems: 'center',height:110,width: '31%',borderRadius: 20,borderColor: 'rgba(97,190,186,1)',borderWidth: 0.5}}>
                  <Image source={CarDoorIcon} style={{width: 65,height: 60}}/>
                  <Text style={{color: 'rgba(13,141,135,1)',marginTop: 6}}>2 DOORS</Text>
                </View>

                <View style={{justifyContent: 'center',elevation: 2,alignItems: 'center',height: 110,width: '31%',borderRadius: 20,borderColor: 'rgba(97,190,186,1)',borderWidth: 0.5}}>
                 <Image source={CarEngineIcon} style={{width: 75,height: 55}}/>
                  <Text style={{color: 'rgba(13,141,135,1)',marginTop: 10}}>AUTOMATIC</Text>
                </View>

                <View style={{justifyContent: 'center',elevation: 2,alignItems: 'center',height: 110,width: '31%',borderRadius: 20,borderColor: 'rgba(97,190,186,1)',borderWidth: 0.5}}>
                  <Image source={CarSeatIcon} style={{width: 50,height: 68}}/>
                  <Text style={{color: 'rgba(13,141,135,1)',padding: 3}}>5 SEATS</Text>
                </View>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Description</Text>
            </View>
            <View style={{marginTop: 7,borderBottomColor: 'rgba(151,151,151,1)',borderBottomWidth: 0.5}}></View>

            <View style={{marginTop: 15}}>
              <ViewMoreText
                numberOfLines={4}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                
              >
              <Text style={{color: 'rgba(100,97,97,1)',lineHeight: 20}}>This isn’t your typical Mercedes. With a hand built 6.2L V8 pushing 507 horsepower this Mercedes is built for speed. The engine is mated to a 7 speed multiclutch transmission that allows for lightning quick shifts. This is the last of its kind with the “507 edition” only being produced from 2014-2015 this Mercedes contains the sought after naturally aspirated V8. The exhaust barks every time you start it or downshift. This isn’t a car for the faint at heart. You must be 21 or older to rent this. No smoking, no pets, no food.</Text>
              </ViewMoreText>
            </View>



            <View style={{marginTop: 20}}>
              <Text style={{color: 'rgba(76,182,177,1)',fontSize: 15}}>Pickup Location</Text>
            </View>
            <View style={{marginTop: 7,borderBottomColor: 'rgba(151,151,151,1)',borderBottomWidth: 0.5}}></View>

            <View style={{marginTop: 20,overflow: 'hidden',elevation: 12,
            borderRadius: 20,borderColor: '#fff',borderWidth: 1
            }}>
             <MapView
               style={{height: 320}}
                zoomEnabled={true}
                initialRegion={{
                  latitude: -29.1482491,
                  longitude: -51.1559028,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,

                }}
                  >
                    <MapView.Circle
                      style={{width: 90,height: 50}}
                      center={{
                        latitude: -29.1482491,
                        longitude: -51.1559028,
                      }}

                      radius={90}
                      strokeWidth={2}
                      strokeColor="#3399ff"
                      fillColor="rgba(108,108,108,0.3)"
                      
                    />
                  </MapView>
            </View>
          
          </View>

          <View style={{marginTop: 40}}>

             <View style={{flexDirection: 'row'}}>
             



              <View style={{
                    zIndex: 11,
                    width: 164,
                    height: 75,
                    backgroundColor: 'rgba(255,178,20,1)'
                    ,alignItems: 'center',justifyContent: 'center'
                    }}> 
                    
                    <View style={{
                        width: 0,
                        height: 0,
                        position: 'absolute',top: 20,left: '87%',
                        transform:[{rotate: '90deg'}],
                        backgroundColor: 'transparent',
                        borderStyle: 'solid',
                        borderLeftWidth: 41,
                        borderRightWidth: 41,
                        borderBottomWidth: 41,
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'rgba(255,178,20,1)'}}>
                   
                    </View>
                     
                    <Text style={{color: '#fff',fontSize: 20,alignSelf: 'center'}}>RENT RIDE</Text>
                    
                </View>

                <View style={{height: 75,paddingLeft: 45,flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor: 'rgba(76,182,177,1)'}}>
                  <Text style={{color: '#fff',fontSize: 20,alignSelf: 'center'}}>CAD $89/<Text style={{fontSize: 15,color: 'rgba(255,255,255,0.8)'}}>DAY</Text></Text>
              
               
                </View>
             
             </View>
              
                
          </View>
      </View>
    </ScrollView>  
    )
  }
}

export default SingleCar
