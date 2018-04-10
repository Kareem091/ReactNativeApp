import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';

export default class CardNative extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </CardItem>

                        <CardItem>
                        </CardItem>

                        <CardItem>
                            <Button transparent>
                                <Icon name="logo-github" />
                                1,926
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}