import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import { Spinner } from './common/Spinner';
import { Input } from './common/Input';
import firebase from 'firebase';
//import TabPage from './TabPage';


export default class LoginForm extends Component {
    state = { username: '', password: '', loginMsg: '', loading: false }

    popUp() {
        Alert.alert(
            'Authentication Failed',
            'You are not Signed Up, Would you Join us, Ok for Registeration, and Cancel for Goodbye :( ',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    login() {
        console.log('Login with email and Password Pressed');
        const { username, password } = this.state;
        this.setState({ loginMsg: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(username, password)
            .catch(() => {
                this.popUp();
                this.setState({ loginMsg: 'Authentication Failed.........' })
            });
    }


    SucessLogin(){
        this.setState({ loginMsg: 'Authentication Sucess..', loading: false });
      //  TabPage();

    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size={'small'} />
        }
        return (
            <Button onPress={this.login.bind(this)} btnName={'Login'} />
        )

    }

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
                    {this.renderButton()}
                </CardItem>
                <CardItem>
                </CardItem>
                <CardItem>
                    <Button onPress={() => console.log('Login Pressed')} btnName={'Login with Facebook'} />
                </CardItem>
                <CardItem>
                    <Text>
                        {this.state.loginMsg}
                    </Text>
                </CardItem>
            </Card>
        );
    }

}