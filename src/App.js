import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAUZi0XW0MBEHWLB-VkvvVFFIRrAUDN_-Y',
            authDomain: 'manager-7bef2.firebaseapp.com',
            databaseURL: 'https://manager-7bef2.firebaseio.com',
            projectId: 'manager-7bef2',
            storageBucket: 'manager-7bef2.appspot.com',
            messagingSenderId: '903547906986'
          };
          firebase.initializeApp(config);
    }

    render(){
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;