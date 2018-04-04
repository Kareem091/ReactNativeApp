import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Button } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  );
};


const styles = {
  cardStyle: {
    //backgroundColor: '#fff',
    //alignItems: 'stretch',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 5,
    margin: 3
  }
};

export default Card;