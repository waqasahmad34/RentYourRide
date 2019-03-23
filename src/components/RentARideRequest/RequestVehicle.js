import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity,Dimensions,ScrollView} from 'react-native'
import Dialog, { SlideAnimation, DialogTitle,DialogContent } from 'react-native-popup-dialog'
import { Thumbnail, Textarea} from 'native-base'
import LocationIcon from 'react-native-vector-icons/Entypo'
import ChevronIcon from 'react-native-vector-icons/Entypo'
import StarRating from 'react-native-star-rating'
import car2 from '../../assets/car2.jpg'
import CryingImage from '../../assets/crying.png'


const {width,height} = Dimensions.get('window')


class RequestVehicle extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      starCount: 4,
      cryingDialog: false
    }
  }

  onStarRatingPress= (rating)=> {
    this.setState({
      starCount: rating
    });
  }

  setModalVisible = (visible) => {
    this.setState({visible: visible})
  }
  render() {
    return (
      <View style={{flex: 1,backgroundColor: 'rgba(216,216,216,1)'}}>
        <TouchableOpacity onPress={()=> this.setModalVisible(true)}>
          <Text style={{justifyContent: 'center',alignItems:'center'}}> Dialog </Text>
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
                    <Text style={{fontSize: 20,color: 'rgba(109,109,109,1)',fontWeight: '600'}}>REQUEST VEHICLE</Text>
                    </View>
                  </View>


              <View style={{marginTop: 10,padding: 12,backgroundColor: 'rgba(242,242,242,1)',borderRadius: 5}}>
                <View style={{flexDirection: 'row'}}>
                  
                  <LocationIcon name='location-pin' style={{alignSelf: 'flex-start',flex:0.5}} color='rgba(255,189,54,1)' size={35}/>
                  <Text style={{color: 'rgba(102,102,102,1)',alignSelf: 'center',fontSize: 15}}>Winnipeg, MB R8N1P1</Text>

                </View>
            </View>


            
            <View style={{marginTop: 12}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                  <View style={{padding: 18,flex: 0.485,backgroundColor: 'rgba(242,242,242,1)',borderRadius: 5}}>
                    <Text style={{color: 'rgba(76,182,177,1)',alignSelf: 'center',fontSize: 16,fontWeight: '500'}}>From</Text>
                    <Text style={{color: 'rgba(102,102,102,1)',marginTop: 5,fontSize: 10}}>JAN 20TH, 2019 - 12:00 AM</Text>
                  </View>
                  <View style={{padding: 18,flex: 0.485,backgroundColor: 'rgba(242,242,242,1)',borderRadius: 5}}>
                    <Text style={{color: 'rgba(76,182,177,1)',alignSelf: 'center',fontSize: 16,fontWeight: '500'}}>Until</Text>
                    <Text style={{color: 'rgba(102,102,102,1)',marginTop: 5,fontSize: 10}}>JAN 26TH, 2019 - 9:00 PM</Text>
                  </View>
                </View>
            </View>

              <View style={{marginTop: 15,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>

              <View style={{flexDirection: 'row',marginTop: 10}}>
                <View style={{}}>
                    <Thumbnail large source={car2}/>
                </View>
                <View style={{flex: 1,flexDirection: 'row',padding: 10}}>
                    <Text style={{color: 'rgba(56,68,97,1)',fontSize: 18,fontWeight: '500'}}>Moe Jackson</Text>
                    <ChevronIcon style={{marginTop:1}} name='chevron-small-right' color='rgba(56,68,97,1)' size={25}/>
                    <View style={{position: 'absolute',top: 35,left:12}}>
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

            <View style={{marginTop: 10,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>

                  <View style={{marginTop: 5}}>
                     

                     

                      
                      <View style={{marginTop: 12,flexDirection: 'row',justifyContent: 'space-between'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',fontSize: 18,fontWeight: '500'}}>Total Price</Text>
                          <Text style={{color: 'rgba(89,89,89,1)',marginTop:4,fontSize: 15,fontWeight: '500'}}>$89.99</Text>
                      </View>

                      <View style={{marginTop: 18,borderBottomColor: 'rgba(151,151,151,0.5)',borderBottomWidth: 0.5}}></View>

                      <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'flex-end'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',paddingRight: '15%',fontSize: 15}}>Service Fees -</Text>
                          <Text style={{color: 'rgba(166,166,166,1)',marginTop:4,fontSize: 12}}>$5.99</Text>
                      </View>

                      <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'flex-end'}}>
                          <Text style={{color: 'rgba(76,182,177,1)',paddingRight: '15%',fontSize: 15}}>Dropoff Fees -</Text>
                          <Text style={{color: 'rgba(166,166,166,1)',marginTop:4,fontSize: 12}}>$5.99</Text>
                      </View>
                  </View>

                 

                  <View style={{marginTop: 15, borderWidth: 1, borderColor: 'rgba(151,151,151,1)', borderRadius: 5}}>
                    <Textarea rowSpan={5} placeholderTextColor='rgba(169,169,169,1)'  placeholder="Let Moe know you’re interested…" />
                  </View>

                   <View style={{marginBottom: 5,elevation: 2,
                    borderRadius: 10, padding: 18,backgroundColor: 'rgba(76,182,177,1)', marginTop: 20}}>
                        <TouchableOpacity onPress={()=> this.setState({cryingDialog: true})}>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>REQUEST VEHICLE</Text>
                        </TouchableOpacity>
                    </View>

                    <Dialog
                      visible={this.state.cryingDialog}
                      height={0.6}
                      width ={width - 25}
                      onTouchOutside={()=> this.setState({cryingDialog: false})}
                      onHardwareBackPress={()=> this.setState({cryingDialog: false})}
                      dialogStyle={{alignSelf: 'center'}}
                      dialogAnimation={new SlideAnimation({
                        slideFrom: 'top',
                      })}
                    >
                    <DialogContent>
                     <ScrollView showsVerticalScrollIndicator={false}>

                     <View style={{justifyContent: 'center',marginTop: 20,alignItems: 'center'}}>
                        <Image source={CryingImage} style={{width: 90, height: 92}} />
                      </View>
                      <View style={{justifyContent: 'center',marginTop: 10,alignItems: 'center'}}>
                        <Text style={{color: 'rgba(76,182,177,1)',fontSize: 20}}>This is awwwkward…</Text>
                      </View>

                      <View style={{justifyContent: 'center',marginTop: 10,alignItems: 'center'}}>
                        <Text style={{color: 'rgba(163,163,163,1)',fontSize: 18}}>You must have a valid licence on file along with your selfie before you can list a ride.</Text>
                      </View>

                      <View style={{elevation: 2,
                    borderRadius: 10, padding: 18,backgroundColor: 'rgba(255,189,54,1)', marginTop: 15}}>
                        <TouchableOpacity onPress={()=> this.setState({cryingDialog: true})}>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>COMPLETE PROFILE</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 5,elevation: 2,
                    borderRadius: 10, padding: 18,backgroundColor: 'rgba(227,227,227,1)', marginTop: 10}}>
                        <TouchableOpacity onPress={()=> this.setState({cryingDialog: false})}>
                        <Text style={{alignSelf: 'center', color: 'rgba(105,102,102,1)', fontSize: 18}}>CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                     </ScrollView>

                    </DialogContent>

                    </Dialog>
                </ScrollView>
                
              </DialogContent>
            </Dialog>
               
      </View>
    )
  }
}

export default RequestVehicle
