
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Header = (prop) => {
    return <View style={styles.viewStyle}>
    <Text>Search..</Text>
        <Text style={styles.fontStyle}>{prop.headerText}</Text>
    </View>

};

const styles = {
    viewStyle: {
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        paddingTop: 1,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#f5f5f5',
        borderBottomWidth: 1,
        elevation: 10,
    },
    fontStyle: {
        fontSize: 20,
    },
};

export default Header; 