import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import { Input } from './common/Input';



export default class LoginForm extends Component {
    state = { username: '', password: '' }

    render() {
        return (
            <Card>
                <CardItem>
                </CardItem>
                <CardItem>
                    <Input
                        style={{ height: 40, width: 100 }}
                        value={this.state.username}
                        placeholder={'Username'}
                        onChangeText={username => this.setState({ username })}
                    />
                </CardItem>
                <CardItem>
                </CardItem>
                <CardItem>
                    <Input
                        style={{ height: 40, width: 100 }}
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardItem>
                <CardItem>
                    <Button onPress={() => console.log('Login Pressed')} btnName={'Login'} />
                </CardItem>
                <CardItem>
                </CardItem>

                <CardItem>
                    <Button onPress={() => console.log('Login Pressed')} btnName={'Login with Facebook'} />
                </CardItem>

            </Card>
        );
    }

}