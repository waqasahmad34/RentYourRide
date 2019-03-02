import React, { Component } from 'react'
import { Text, View, Image, Dimensions} from 'react-native'



const {width,height} = Dimensions.get('window')

export default class Card extends Component {
  render() {
    return (
      <View style={{width: '100%',backgroundColor: '#fff', height: 162, borderRadius: 15, marginTop: 10,elevation: 5, marginBottom: 5}}>
        <View style={{width: '41%', position: 'relative'}}>
            <Image source={this.props.image} style={{height: 162, width: null, resizeMode: 'cover',borderRadius: 10}} />
        </View>

        <View  style={{position: 'absolute',marginLeft: '43%'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Toyota Corolla</Text>
            </View>
            <View style={{marginTop: 8,marginLeft: 4}}>
              <Text style={{color: 'grey', fontWeight: "bold"}}>SEDAN</Text>
            </View>
          </View>

          <View style={{margin: 5,flexDirection: 'row'}}>
            <View style={{backgroundColor: '#dddddd', borderRadius: 20, padding: 3, width: '35%'}}>
              <Text style={{alignSelf: 'center'}}>WHITE</Text>
            </View>

            <View style={{marginLeft: 5,backgroundColor: '#dddddd', borderRadius: 20,width: "35%", padding: 3, flex: 0.9}}>
              <Text style={{alignSelf: 'center'}}>AUTOMATIC</Text>
            </View>
             
            
          </View>

          <View style={{margin: 5, flexDirection: 'row'}}>
            <View style={{backgroundColor: '#dddddd', borderRadius: 20,width: '35%', padding: 3, flex: 0.8}}>
              <Text style={{alignSelf: 'center'}}>GASOLINE</Text>
            </View>

            <View style={{marginLeft: 5,backgroundColor: '#dddddd', borderRadius: 20,padding: 3, width: '30%'}}>
              <Text style={{alignSelf: 'center'}}>2015</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row',justifyContent: 'flex-end', width: '100%', paddingRight: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 3}}>
                <Text style={{color: 'green'}}>$</Text>
              </View>
              <View>
                <Text style={{color: 'green', fontSize: 18}}>75</Text>
              </View>
            </View>

            <View style={{marginLeft: 5}}>
              <Text style={{color: 'orange', fontSize: 18}}>CAD</Text>
            </View>
          </View>

          <View style={{paddingRight: 10, marginTop: 5}}>
              <View style={{justifyContent: 'flex-end',alignSelf: 'flex-end',flex: 1}}>
                <Text>per day + CAD0.75/KM over limit</Text>
              </View>
          </View>
        </View>
       

      </View>
    )
  }
}
