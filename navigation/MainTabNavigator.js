import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DeckList from "../components/DeckList";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Deck from "../components/Deck";
const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const DeckListStack = createStackNavigator({
    DeckList: DeckList,
    Deck: Deck,
}, config);
DeckListStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Ionicons size={25} name="ios-home"/>,
};
DeckListStack.path = '';


const tabNavigator = createBottomTabNavigator({
    DeckListStack,
});

tabNavigator.path = '';

export default tabNavigator;
