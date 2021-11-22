import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import CalendarScreen from './screens/CalendarScreen';
import TodoListScreen from './screens/TodoListScreen';
import FriendsScreen from './screens/FriendsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names
const calendarName = 'Calendar';
const todoListName = 'Todo List';
const friendsName = 'Friends';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={todoListName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === todoListName) {
                            iconName = focused ? 'list' : 'list-outline';
                        }
                        else if (rn === calendarName) {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (rn === friendsName) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },})}
                Options={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: {padding: 10, height: 70}
                }}
            >

                <Tab.Screen name={calendarName} component={CalendarScreen}/>
                <Tab.Screen name={todoListName} component={TodoListScreen}/>
                <Tab.Screen name={friendsName} component={FriendsScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}