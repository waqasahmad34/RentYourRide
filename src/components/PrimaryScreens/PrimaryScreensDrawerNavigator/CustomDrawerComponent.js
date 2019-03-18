import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { DrawerItems } from "react-navigation"
import { Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ChevronRightIcon from 'react-native-vector-icons/MaterialIcons'



const CustomDrawerComponent = (props) => {
  return(
    <ScrollView style={{flex: 1}}>
  
        <View>
          <View style={{marginTop: 55,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>MENU</Text>
          </View>
          <View style={{marginTop: 10,borderBottomWidth: 1, borderBottomColor: '#dddddd'}}></View>

          <View style={{margin: 15, flexDirection: 'row'}}>
            <View>
             <Thumbnail source={require('../../../assets/car2.jpg')}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
              <Text style={{fontSize: 17, fontWeight: '400'}}>GEORGE LOPEZ</Text>
            </View>
          </View>

         
        </View>
        {/* <SafeAreaView>
          <DrawerItems {...props} />
         
        </SafeAreaView> */}
        <View>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Index')}>
          <View style={{marginTop: 8, padding: 12, borderLeftWidth: 5,borderLeftColor: 'rgba(76,182,177,1)'
        ,flexDirection: 'row',justifyContent: 'space-between'}}>
               
                  <Text style={{fontSize: 20,marginLeft: 52,color: 'rgba(76,182,177,1)'}}>RENT CAR</Text>
                 
                
                <ChevronRightIcon color='rgba(76,182,177,1)' name="chevron-right" size={30}/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.navigation.navigate('ListRideStackNavigator')}>
            <View style={{marginTop: 8, padding: 12, flexDirection: 'row',justifyContent: 'space-between'}}>
                
                  <Text style={{fontSize: 20,marginLeft: 58,color: 'rgba(76,182,177,1)'}}>LIST CAR</Text>
                 
               
                <ChevronRightIcon color='rgba(76,182,177,1)' name="chevron-right" size={30}/>
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=> props.navigation.navigate('Account')}>
            <View style={{marginTop: 8, padding: 12, flexDirection: 'row',justifyContent: 'space-between'}}>
                
                  <Text style={{fontSize: 20,marginLeft: 58,color: 'rgba(76,182,177,1)'}}>MY ACCOUNT</Text>
                 
                
                <ChevronRightIcon color='rgba(76,182,177,1)' name="chevron-right" size={30}/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.navigation.navigate('Account')}>
            <View style={{marginTop: 8, padding: 12, flexDirection: 'row',justifyContent: 'space-between'}}>
                
                  <Text style={{fontSize: 20,marginLeft: 58,color: 'rgba(76,182,177,1)'}}>EDIT PROFILE</Text>
                 
              
                <ChevronRightIcon color='rgba(76,182,177,1)' name="chevron-right" size={30}/>
            </View>
            </TouchableOpacity>

          </View>



          <View style={{marginTop: 10,borderBottomWidth: 1, borderBottomColor: '#dddddd'}}></View>

          <View style={{margin: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
             <Text style={{fontSize: 17, fontWeight: '600'}}>ADDITIONAL LINKS</Text>
            </View>
            <View style={{marginTop: 15,marginRight: 45,justifyContent: 'center', alignItems: 'center'}}>
             <Text>HOW IT WORKS?</Text>
            </View>
            <View style={{marginTop: 15,marginRight: 25,justifyContent: 'center', alignItems: 'center'}}>
             <Text>INSURANCE POLICY</Text>
            </View>


            <View style={{borderWidth: 2,borderColor: 'orange',marginTop: 25,borderRadius: 30, padding: 15,backgroundColor: '#FFE5CC'}}>
                  <TouchableOpacity>
                   <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <View style={{marginRight: 20}}>
                        <Icon name="logout" size={23} color="orange" />
                      </View>
                      <View>
                        <Text style={{color: 'orange', fontSize: 18}}>LOG OUT</Text>
                      </View>
                   </View>
                  </TouchableOpacity>
                </View>
            </View>
      </ScrollView>
    
  )
}

export default CustomDrawerComponent

