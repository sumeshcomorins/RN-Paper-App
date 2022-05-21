import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Keyboard,ActivityIndicator } from 'react-native'
import { fetchApi } from './common/api';
import { config } from '../../config';
import { colors } from './common/Colors';
import { AuthContext } from './common/Context';
import { HelperText,TextInput,Button,Chip } from 'react-native-paper';

export default function Loginscreen(props) {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [loading, setLoading] = useState( false )
  const User = React.useContext(AuthContext);

  const onChangeEmail = text => setusername(text);
  const onChangePwd = text => setpassword(text);


  const emailErrors = () => {
      if(username){
    return !username.includes('@');
      }else{
          return false
      }
  };

  const onLogin = async() => {
    // props.navigation.navigate('Home')

    Keyboard.dismiss()
    setLoading(true)
    if(username && password){
      const data={
        "request":"loginUser",
        "username" : username,
        "password" : password,
    }
    console.log('data', data)
    const response = await fetchApi(config.TEST+'loginUser',data);
console.log('response.data', response)
    if (response?.data?.status == 'success'){
    User.setUserToken(response.data.user.id)
    User.setUserDetail(response.data.user)
    setLoading(false)
    }else{
    setLoading(false)
      alert(' Email or Password wrong.')
    }
     }
    else{
    setLoading(false)
      alert('Wrong Input! Email or password field cannot be empty.')
    }
  }

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  if ( loading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', }}>
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{width:300,alignSelf:'center'}}>
      <Text style={{textAlign:'center',marginVertical:20,fontSize:18,fontWeight:'bold'}}>Log In</Text>
      
      <TextInput
      mode="outlined"
      label="Email"
      placeholder="Type something"
    //   right={<TextInput.Affix text="/100" />}
      value={username}
        onChangeText={(username) => onChangeEmail(username)}
    />
    {/* <HelperText type="error" visible={emailErrors()}>
        Email address is invalid!
      </HelperText> */}

     <TextInput
      mode="outlined"
      label="Password"
      secureTextEntry={secureTextEntry}
      right={<TextInput.Icon name="eye" onPress={() => {
        setSecureTextEntry(!secureTextEntry);
        return false;
      }} />}
      value={password}
        onChangeText={(password) => onChangePwd(password)}
    />
    <View style={{marginTop:30}}>
     <Button icon="login" mode="contained" onPress={() => onLogin()}>
    Log In
  </Button>
  </View>
<View style={{width:120,alignSelf:'center',marginTop:20}}>
  <Chip icon="arrow-right" mode={'outlined'} onPress={() => props.navigation.navigate('Register')}>Registration</Chip>
</View>
  </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputBox: {
    width:300,
    height:50,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10,
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  },
  button:{
    width:300,
    marginVertical:10,
    backgroundColor:'#1c313a',
    borderRadius:25,
    paddingHorizontal:20,
    paddingVertical:15
  },
})