import { View, Text } from 'react-native'
import React from 'react'
import { AuthContext } from './common/Context';
import { colors } from './common/Colors';
import { Chip } from 'react-native-paper';
export default function Welcom(props) {
  const Users = React.useContext(AuthContext);
    const userName = Users.userDetail.name
    const userEmail = Users.userDetail.email
    const userAuthToken = Users.userToken

    const logOutHandler = () => {
      Users.setUserToken(null)
  }
  return (
    <View style={{flex:1,backgroundColor:colors.dolphin}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View>
      <Text style={{fontSize:18,fontWeight:'bold',color:colors.defaultWhite}}>Welcome {userEmail}</Text>
      <View style={{width:90,alignSelf:'center',marginTop:20}}>
  <Chip icon="logout-variant" mode={'outlined'} onPress={() => logOutHandler()}>log out</Chip>
</View>
        </View>
      </View>
    </View>
  )
}