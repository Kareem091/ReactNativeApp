import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const Button = (prop) => {
    return (
        <TouchableOpacity onPress={prop.onPress} style={styles.btnStyle}>
            <Text style={styles.txtStyle}>{prop.btnName}</Text>
        </TouchableOpacity>

    );
}

const styles = {
    txtStyle: {
        alignSelf: 'center',
        //color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 0,
        //borderColor: '#007aff',
        margin: 5
    }
};


export default Button;