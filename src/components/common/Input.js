import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const Input = (prop) => {
    return (
        <View style={styles.containerStyle}>
            <Text>{prop.label}</Text>
            <TextInput
                value={prop.value}
                underlineColorAndroid='transparent'
                secureTextEntry={prop.secureTextEntry}
                autoCorrect={false}
                placeholder={prop.placeholder}
                onChangeText={prop.onChangeText}
                style={styles.inputStyle}
            />
        </View >
    );
};

const styles = {
    labelStyle: {
        fontSize: 10,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        //underlineColorAndroid:'',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

}

export { Input }