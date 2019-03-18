import React, { Component } from 'react'
import {CheckBox,Text,Image, View, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'
import UploadPic from '../../../../../assets/image_upload_variant.png'
import ImageUpload from '../../../../../assets/image_upload.png'

const images = [
  require('../../../../../assets/car1.jpg'),
  require('../../../../../assets/car2.jpg'),
  require('../../../../../assets/car3.jpg'),
  require('../../../../../assets/car4.jpg'),
  require('../../../../../assets/car2.jpg'),
 
]


class Photos extends Component {

  renderImages = () =>{
    return images.map((image,index)=>{
      return(
        <View key={index} style={[{width: 100},{height: 100},
        index % 3 !== 0 ? {padding: 2} : {paddingLeft: 0},{marginBottom: 2},
        index === 0 ? {borderWidth: 2,borderColor: 'rgba(255,187,46,1)'} : {}]}>
          <Image style={{resizeMode: 'cover',flex: 1,width: null,height: null}}
          source={image}/>
        </View>
        
      )
    })
  }
  render() {
    return (
      

        <ScrollView>

          <View style={{position: 'absolute',padding: 7,left: 20,marginTop: 10}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                  <Icon size={45} style={{color: 'orange'}} name="md-arrow-back"/>
                </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row',marginTop: 25,justifyContent: 'center', alignItems: 'center'}}>
             
              <View style={{}}>
                <Text style={{alignSelf: 'center',fontSize: 20,fontWeight: 'bold'}}>PHOTOS</Text>
              </View>
            </View>

          <View  style={{flex: 1, marginHorizontal: 20,marginTop: 5}}>
            
              
              <View style={{borderStyle: 'dashed',marginTop: 15, borderWidth: 2, backgroundColor: 'rgba(227,234,238,1)', borderColor: '#dddddd', borderRadius: 5}}>
                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',padding: 20}}>
                  <View style={{width: '25%'}}>
                    <Image source={ImageUpload}  style={{width: 50,height: 50}} />
                  </View>
                  <View style={{width: '75%'}}>
                    <Text style={{color: 'rgba(76,182,177,1)',fontSize: 18,fontWeight: '500'}}>UPLOAD PHOTOS</Text>
                    <Text style={{color: 'rgba(153,153,153,1)',fontSize: 14}}>YOU CAN ADD UPTO 10 PHOTOS</Text>
                  </View>
                </View>
              </View>

             

              <View style={{marginTop: 8,padding: 10,alignItems: 'center',justifyContent: 'center'}}>
                <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
                  {this.renderImages()}
                  <TouchableOpacity>
                    <View style={{width: 100,height: 100,backgroundColor: 'rgba(244,243,247,1)', padding: 10}}>
                      <Image source={UploadPic} style={{width: 35,height: 35,marginTop: 10,alignSelf: "center"}}/>
                      <Text style={{color: 'rgba(77,77,77,1)',fontSize: 16,marginTop: 5,alignSelf: 'center'}}>UPLOAD</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>


             

              <View style={{marginTop: 5, marginHorizontal: 3.5}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                  <CheckBox />
                  </View>
                 
                    <View style={{marginLeft: 5,marginTop: 3.5,alignContent: 'center',justifyContent: 'center',marginRight: 5}}>
                      <Text style={{lineHeight: 20,color: 'rgba(58,175,169,1)',alignSelf: 'flex-start'}}>I confirm that my vehicle has the proper
                      insurance needed to properly rent my vehicle to
                      others in Manitoba</Text>
                      
                    </View>
                 
                </View>

                <View style={{flexDirection: 'row',marginTop: 10}}>
                  <View style={{marginLeft: 3}}>
                  <LocationIcon name="location-pin" size={30} color='rgba(255,187,46,1)'/>
                  </View>
                  <View style={{marginLeft: 5,alignContent: 'center',justifyContent: 'center'}}>
                    <Text style={{lineHeight: 20,color: 'rgba(64,64,64,1)'}}>In Manitoba, please ensure that your insurance coverage is under UDrive</Text>
                  </View>
                </View>
              </View>


             
            
            
              <View style={{marginBottom: 5,elevation: 2,borderRadius: 10, padding: 18,backgroundColor: 'rgba(58,175,169,1)', marginTop: 14}}>
                 <TouchableOpacity onPress={()=> this.props.navigation.navigate('ListRide')}>
                   <Text style={{alignSelf: 'center', color: 'white', fontSize: 18}}>COMPLETE</Text>
                 </TouchableOpacity>
              </View>  
        </View>
      </ScrollView>

    )
  }
}

export default Photos
