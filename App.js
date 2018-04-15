/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Header from './src/components/common/Header';
import PeopleList from './src/components/PeopleList';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

title: String;
export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp
      ({
        apiKey: "AIzaSyCYUnybFpc9v1IbCd-4MtYC144E4dhnTzs",
        authDomain: "pinpassion-9af57.firebaseapp.com",
        databaseURL: "https://pinpassion-9af57.firebaseio.com",
        projectId: "pinpassion-9af57",
        storageBucket: "pinpassion-9af57.appspot.com",
        messagingSenderId: "396046476545"
  
      })
  };

  render() {
    this.title = 'Passion Home';
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'I Passion'} />
        <LoginForm />
      </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 15
  },
});
