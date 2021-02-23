
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {TabNavigator} from './components/TabNavigator'


export default class App extends Component {
  render(){
  return
  (
     <AppContainer/>
     )

  }
}

const switchNavigator=createSwitchNavigator({
  welcome:{screen:WelcomeScreen},
  tab:{screen:TabNavigator}
})

const AppContainer=createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
