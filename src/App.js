import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
        <Provider store={store}>
            <Router />
        </Provider>
        );
    }
}

export default App;