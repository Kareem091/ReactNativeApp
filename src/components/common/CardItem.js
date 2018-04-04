import React, { Component } from 'react';
import { Platform, View } from 'react-native';

const CardItem = (props) => {
    return (
        <View style={styles.cardItemStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardItemStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        padding: 5,
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};

export default CardItem;