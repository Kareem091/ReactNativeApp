import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Header from './common/Header';
import PeopleProfile from './PeopleProfile'


export default class PeopleList extends Component {
    // concept to update the data, and once it updated is re-render the view again
    // state alwayes update with setStates. never ever ever use state = 
    //object used to record and respond to user trigger events
    state = { users: [] };

    // onLoad Methods lifeCycle Hooks
    componentWillMount() {
        console.log('Entering PeopleList...');
        axios.get('https://crmapplication-all.herokuapp.com/api/allusers')
            .then(res => this.setState({ users: res.data }));
    }

    renderUsers() {
        //**-MAP is 
        // .map is array helper we call it to fetch from array
        //pass inside function - function for each index inside array
        // Mapping json/arraylist to
        // key is used for performance // associate the id with record so when fetch, update or delete and so in
        return this.state.users.map(user => <PeopleProfile key={user.id} selectedUser={user} />);
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>{this.renderUsers()}</ScrollView>
        );
    }
};
