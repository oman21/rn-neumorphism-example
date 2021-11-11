/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App: () => Node = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#dae4ed'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin:20}}>
          <View style={{flexDirection:"row", justifyContent:'space-around', flexWrap:'wrap'}}>
            <Neomorph
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#dae4ed',
                width: 150,
                height: 150,
                padding: 10,
                flexDirection:'column',
                justifyContent:'center',
                marginBottom:20
              }}
            >
              <FontAwesome5 name={'temperature-low'} color={'#5f84f5'} size={30}/>
              <Text style={{fontSize:14, fontWeight:'bold', marginVertical: 10, color:"#000"}}>Temperature</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf: 'flex-start', transform: [{ scaleX: 1.3 }, { scaleY: 1.2 }]}}
              />
            </Neomorph>
            <Neomorph
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#dae4ed',
                width: 150,
                height: 150,
                padding: 10,
                flexDirection:'column',
                justifyContent:'center',
                marginBottom:20
              }}
            >
              <FontAwesome5 name={'lightbulb'} color={'#5f84f5'} size={30}/>
              <Text style={{fontSize:14, fontWeight:'bold', marginVertical: 10, color:"#000"}}>Lamp Living Room</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf: 'flex-start', transform: [{ scaleX: 1.3 }, { scaleY: 1.2 }]}}
              />
            </Neomorph>
            <Neomorph
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#dae4ed',
                width: 150,
                height: 150,
                padding: 10,
                flexDirection:'column',
                justifyContent:'center',
                marginBottom:20
              }}
            >
              <FontAwesome5 name={'tv'} color={'#5f84f5'} size={25}/>
              <Text style={{fontSize:14, fontWeight:'bold', marginVertical: 10, color:"#000"}}>Smart TV</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf: 'flex-start', transform: [{ scaleX: 1.3 }, { scaleY: 1.2 }]}}
              />
            </Neomorph>
            <Neomorph
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#dae4ed',
                width: 150,
                height: 150,
                padding: 10,
                flexDirection:'column',
                justifyContent:'center',
                marginBottom:20
              }}
            >
              <MaterialIcons name={'router'} color={'#5f84f5'} size={40}/>
              <Text style={{fontSize:14, fontWeight:'bold', marginVertical: 10, color:"#000"}}>Router</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf: 'flex-start', transform: [{ scaleX: 1.3 }, { scaleY: 1.2 }]}}
              />
            </Neomorph>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
