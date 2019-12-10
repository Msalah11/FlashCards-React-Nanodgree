import reducer from './reducers';
import { createStore } from 'redux';
import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import Statusbar from './components/Statusbar';
import { StyleSheet, Text, View } from 'react-native';
import { setLocalNotification } from './helpers/notifications';
import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <Statusbar/>
                    <Text>App Works Fine</Text>
                    <AppNavigator/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
