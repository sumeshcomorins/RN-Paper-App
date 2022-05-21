import { View, Text } from 'react-native'
import React from 'react'
import { colors } from './common/Colors'

export default function DetailsScreen() {
  
  return (
    <View style={{flex:1,backgroundColor:colors.dolphin}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View>

      <Text style={{fontSize:18,fontWeight:'bold',color:colors.defaultWhite}}>Detail Screen</Text>
        </View>
      </View>
    </View>
  )
}