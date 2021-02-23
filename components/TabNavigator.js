import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookRequest from '../screens/bookRequest';
import DonateScreen from '../screens/donateBook';

export const TabNavigator = createBottomTabNavigator({
 donate:{screen:DonateScreen,
 navigationOptions:{
     tabBarIcon:
     <Image
     source={require("../assets/donate-book.jpg")}
     style={{width:33, height:35,marginBottom:1}}
     />,
     tabBarLabel:"Donate Book"

 }},

 request:{screen:BookRequest,
 navigationOptions:{
     tabBarIcon:
     <Image
     source={require("../assets/request-book.png")}
     style={{width:50, height:50}}
     />,
     tabBarLabel:"Request Book"
 }}
 
})