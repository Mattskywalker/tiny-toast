import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styleApps} from './styles/StyleApp/StyleApp'

export default function App() {

 const showToast = () => {
   ToastAndroid.show("Message",ToastAndroid.SHORT);
 } 

  return (
    <View style={styleApps.container}>

      <TouchableOpacity style = {styleApps.button} onPress={()=>{showToast()}}>
        <Text>Press</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

