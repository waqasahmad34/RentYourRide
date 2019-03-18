import React, { Component } from 'react'
import { Text, View,ScrollView, TouchableOpacity,Picker} from 'react-native'
import CarListingCard from '../common/CarListingCard'
import car1 from '../../../../../assets/car1.jpg'
import car2 from '../../../../../assets/car2.jpg'
import car3 from '../../../../../assets/car3.jpg'
import car4 from '../../../../../assets/car4.jpg'
import Dialog, { SlideAnimation, DialogTitle,DialogContent } from 'react-native-popup-dialog'
import { Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')


class CarListing extends Component {
 

  constructor(props){
    super(props)
    this.state = {
      visible: false,
      vehicleType: '',
      transmissionType: '',
      fuleType: ''
    }
  }

  setModalVisible = (visible) => {
    this.setState({visible: visible})
  }

 
  render() {
    return (
      <ScrollView style={{flex: 1,backgroundColor: '#dddddd'}}>
        <View style={{margin: 15, marginTop: 50, flexDirection: 'row',justifyContent: 'space-between'}}>
              <View style={{marginTop: 5}}>
                <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}>
                  <View>   
                    <View style={{borderBottomWidth: 5, borderBottomColor: "orange" ,width: 40}}>
                      </View>
                      <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "orange" ,width: 30}}>
                      </View>
                      <View style={{marginTop: 5,borderBottomWidth: 5, borderBottomColor: "orange" ,width: 20}}>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{flex: 0.5}} onPress={()=> this.setModalVisible(true)}>
                 <View style={{borderRadius: 30, padding: 10,backgroundColor: '#fff',marginBottom: 5}}>
                 
                   <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18,fontWeight: 'bold'}}>FILTERS</Text>
                
                 </View> 
              </TouchableOpacity>

              <Dialog
              visible={this.state.visible}
              height={0.55}
              width ={width}
              onTouchOutside={()=> this.setState({visible: false})}
              onHardwareBackPress={()=> this.setState({visible: false})}
              dialogStyle={{position: 'absolute', bottom: 50}}
              dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
              })}
            >
              <DialogContent>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{borderBottomWidth: 4, borderBottomColor: "orange" ,width: 50, marginTop: 12}}></View>
                    <View style={{marginTop: 8}}>
                    <Text style={{fontSize: 20,fontWeight: '600'}}>FILTERS</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 6,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                    <Picker
                        selectedValue={this.state.vehicleType}
                        style={{flex: 1}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({vehicleType: itemValue})
                        }>
                        <Picker.Item label='Vehicle Type' value='0' />
                        <Picker.Item label='Sedan' value='1' />
                        <Picker.Item label='Minivan' value='2' />
                        <Picker.Item label='Crossover' value='3' />
                        <Picker.Item label='Mercedes' value='4' />
                      </Picker>
                    </View>

                    <View style={{marginTop: 5,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                    <Picker
                        selectedValue={this.state.vehicleType}
                        style={{flex: 1}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({vehicleType: itemValue})
                        }>
                        <Picker.Item label='Vehicle Type' value='0' />
                        <Picker.Item label='Sedan' value='1' />
                        <Picker.Item label='Minivan' value='2' />
                        <Picker.Item label='Crossover' value='3' />
                        <Picker.Item label='Mercedes' value='4' />
                      </Picker>
                    </View>


                    <View style={{marginTop: 5,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                    <Picker
                        selectedValue={this.state.transmissionType}
                        style={{flex: 1}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({transmissionType: itemValue})
                        }>
                        <Picker.Item label='Transmission Type' value='0' />
                        <Picker.Item label='Automatic Transmission' value='1' />
                        <Picker.Item label='Dual‑clutch Transmission' value='2' />
                        <Picker.Item label='Tiptronic Transmission' value='3' />
                        <Picker.Item label='Direct‑shift gearbox' value='4' />
                      </Picker>
                    </View>

                    <View style={{marginTop: 5,borderWidth: 1, backgroundColor: '#dddddd', borderColor: '#dddddd', borderRadius: 5}}>
                    <Picker
                        selectedValue={this.state.fuleType}
                        style={{flex: 1}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({fuleType: itemValue})
                        }>
                        <Picker.Item label='Fule Type' value='0' />
                        <Picker.Item label='Diesel' value='1' />
                        <Picker.Item label='Natural gas' value='2' />
                        <Picker.Item label='Hydrogen' value='3' />
                        <Picker.Item label='Biodiesel' value='4' />
                      </Picker>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      
                        <View style={{flex: 1,borderWidth: 2,borderColor: 'rgba(168,168,168,1)',borderRadius: 30, padding: 8,backgroundColor: '#dddddd', marginTop: 16}}>
                          <TouchableOpacity>
                            <Text style={{alignSelf: 'center', color: 'rgba(168,168,168,1)', fontSize: 18}}>Clear</Text>
                            </TouchableOpacity> 
                        </View>
                     
                      
                        <View style={{marginLeft: 5,flex: 1,borderWidth: 2,borderColor: 'orange',borderRadius: 30, padding: 8,backgroundColor: '#FFE5CC', marginTop: 16}}>
                          <TouchableOpacity>
                            <Text style={{alignSelf: 'center', color: 'orange', fontSize: 18}}>Search</Text>
                          </TouchableOpacity>
                        </View>  
                      
                    </View>
              
                </ScrollView>
                
              </DialogContent>
            </Dialog>
               
        </View>
       <View style={{marginHorizontal: 8}}>
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('SingleCar')}>
          <CarListingCard image = {car1} />
         </TouchableOpacity>
         <CarListingCard image = {car2} />
         <CarListingCard image = {car3} />
         <CarListingCard image = {car4} />
         <CarListingCard image = {car1} />

         
       </View>

      </ScrollView>
    )
  }
}



export default CarListing
