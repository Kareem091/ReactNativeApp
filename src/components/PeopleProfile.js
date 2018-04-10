import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Header from './common/Header';
import Card from './common/Card'
import CardItem from './common/CardItem';
import Button from './common/Button';


const PeopleProfile = (props) => {
    return (
        <Card>
            <CardItem>
                <TouchableOpacity>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{ uri: props.selectedUser.photoURL }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{props.selectedUser.displayName}</Text>
                    <Text>{props.selectedUser.nickName}</Text>
                </View>
            </CardItem>
            <CardItem >
                <View style={{ flexDirection: 'column' }}>
                    <Text>Jan 15, 2018</Text>
                    <Text>Software Developer</Text>
                    <Text>He is interesting in Technology</Text>
                    <Text>Egypt/Cairo - Shoubra</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={styles.imageStyle} source={{ uri: props.selectedUser.photoURL }} />
            </CardItem>
            <CardItem>
                <Button onPress={() => console.log('View Profile')} btnName={'View Profile'} />
            </CardItem>
        </Card>

    )
};

const styles = {

    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    thumbnailStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    headerTextStyle: {
        fontSize: 20
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
        borderRadius: 2,

    }
};

export default PeopleProfile;

