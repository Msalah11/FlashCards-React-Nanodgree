import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DeckList from "../components/DeckList";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Deck from "../components/Deck";
import AddCard from "../components/AddCard";
import Quiz from "../components/Quiz";
import AddDeck from "../components/AddDeck";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const DeckListStack = createStackNavigator({
    DeckList: DeckList,
    Deck: Deck,
    AddCard: AddCard,
    Quiz: Quiz,
}, config);
DeckListStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Ionicons size={25} name="ios-home"/>,
};
DeckListStack.path = '';

const AddDeckStack = createStackNavigator({
    AddDeck: AddDeck,
}, config);

AddDeckStack.navigationOptions = {
    tabBarLabel: 'Add Deck',
    tabBarIcon: <Ionicons size={25} name="ios-add"/>,
};
AddDeckStack.path = '';


const tabNavigator = createBottomTabNavigator({
    DeckListStack,
    AddDeckStack
});

tabNavigator.path = '';

export default tabNavigator;
