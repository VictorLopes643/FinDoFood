import  React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Root, Icon } from 'native-base';
import MapClass from './src/pages/Maps';
import SearchBar from './src/components/SearchBar';
import FinFood from './src/pages/FinFood';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenDoMapa from './src/pages/ScreenDoMapa';
import Email from './src/pages/login/email';



const AppNavigator = createStackNavigator({

  'Login' :{
    screen: ScreenDoMapa,
    navigationOptions:{
      headerTransparent: 'false'
    }
  },
  'Home': {
    screen: FinFood,
    navigationOptions:{
      headerTransparent: 'false'
    },
  },
  'Email' : {
    screen: FinFood,
    navigationOptions:{
      headerTransparent: 'false'
  }
}

})

const AppContainer =  createAppContainer(AppNavigator);

export default AppContainer;