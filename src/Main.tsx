import '@babel/polyfill';
import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {AddMeal} from './pages/AddMeal';
import {Home} from './pages/Home';
import {HomePage} from './pages/HomePage';
import {Login} from './pages/Login';
import {Metrics} from './pages/Metrics';
import {SignUp} from './pages/SignUp';

const AppNavigator = createStackNavigator(
    {
        Home,
        Login,
        SignUp,
        Metrics,
        HomePage,
        AddMeal,
    },
    {
        headerMode: 'none',
    }
);

export default createAppContainer(AppNavigator);
