import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import { AuthContext } from './src/screens/common/Context';

const screenOptions = {
  // headerTitleAlign: 'center',
  // headerStyle: {
  //   backgroundColor: colors.schedule_blue,
  // },
  // headerTintColor: 'white',
  headerShown: false
};


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={screenOptions}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const DetailsStack = createNativeStackNavigator();

function DetailsStackScreen() {
  return (
    <DetailsStack.Navigator initialRouteName="Details" screenOptions={screenOptions}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} />
    </DetailsStack.Navigator>
  );
}

const RegisterStack = createNativeStackNavigator();

// function RegisterStackScreen() {
//   return (
//     <RegisterStack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
//       <RegisterStack.Screen name="Login" component={LoginScreen} />
//       <RegisterStack.Screen name="Register" component={RegistrationScreen} />
//     </RegisterStack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState([]);
  const user = {userDetail, setUserDetail,userToken,setUserToken};
  return (
<AuthContext.Provider value = {user}>

    <NavigationContainer>
      {userToken ?<Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home"
      activeColor='red'
      barStyle={{backgroundColor: 'white', borderWidth: 0.15,paddingBottom: 2}}>
        <Tab.Screen name="Home" component={HomeStackScreen}   options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="account-box" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Details" component={DetailsStackScreen} options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="filter-list" size={24} color={color} />
          ),
        }}/>
      </Tab.Navigator>:
      <RegisterStack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <RegisterStack.Screen name="Login" component={LoginScreen} />
      <RegisterStack.Screen name="Register" component={RegistrationScreen} />
    </RegisterStack.Navigator>}
    </NavigationContainer>
    </AuthContext.Provider>

  );
}