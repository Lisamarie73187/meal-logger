import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {ActivityDashboard} from '../components/ActivityDashboard';
import {MealsDashboard} from '../components/MealsDashboard';
import {TopNav} from '../components/TopNav';
import {WaterDashboard} from '../components/WaterDashboard';

const tabs = {
    meals: 'meals',
    water: 'water',
    activity: 'activity',
};

interface Props extends NavigationScreenProps<any> {}

export const HomePage = (props: Props) => {
    const user = props.navigation.getParam('user');
    const [tab, setTab] = useState(tabs.meals);

    return (
        <View style={styles.bodyContainer}>
            <TopNav
                tab={tab}
                setTabMeals={() => setTab(tabs.meals)}
                setTabWater={() => setTab(tabs.water)}
                setTabActivity={() => setTab(tabs.activity)}
            />
            {tab === tabs.meals && <MealsDashboard />}
            {tab === tabs.water && <WaterDashboard />}
            {tab === tabs.activity && <ActivityDashboard />}
        </View>
    );
};
const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
