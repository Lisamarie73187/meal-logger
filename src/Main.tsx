import '@babel/polyfill';
import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {Metrics} from './pages/Metrics';
import {SignUp} from './pages/SignUp';

const AppNavigator = createStackNavigator(
    {
        Home,
        Login,
        SignUp,
        Metrics,
    },
    {
        headerMode: 'none',
    }
);

export default createAppContainer(AppNavigator);
