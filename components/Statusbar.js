import React from 'react';
import Constants from 'expo-constants';
import { colors } from '../helpers/colors';
import { StatusBar, View } from 'react-native';

export default function Statusbar() {
    return(
        <View style={{ backgroundColor: colors.BLUE, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={colors.BLUE} barStyle="light-content" />
        </View>
    )
}
