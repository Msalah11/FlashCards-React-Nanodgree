import React, {useEffect} from 'react';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { setLocalNotification } from './helpers/notifications';

export default function App() {

    useEffect(() => {
        setLocalNotification()
    });

    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.container}>
                <Text>Flash Cards</Text>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
