/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Main from './Main';
import {StateProvider} from './StateProvider';

export const App = () => {
    const initialState = {
        theme: {primary: 'green'},
        appGoal: '',
        startDate: new Date(),
        endDate: new Date(),
        notes: '',
    };

    const reducer = (
        state: any,
        action: {type: any; newTheme: any; appGoal: any; startDate: any; endDate: any; notes: any}
    ) => {
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.newTheme,
                };
            case 'goal':
                return {
                    ...state,
                    appGoal: action.appGoal,
                };
            case 'setStartDate':
                return {
                    ...state,
                    startDate: action.startDate,
                };
            case 'setEndDate':
                return {
                    ...state,
                    endDate: action.endDate,
                };
            case 'setNotes':
                return {
                    ...state,
                    notes: action.notes,
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Main />
        </StateProvider>
    );
};
