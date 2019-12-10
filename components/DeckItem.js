import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckItem extends Component {
    render() {
        const {item} = this.props;

        return (
            <View>
                <Text style={style.deckTitle}>{item.title}</Text>
                <Text>{item.questions.length} cards</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    deck: {
        borderTopColor: '#cccccc',
        borderTopWidth: 1,
        paddingBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 18
    },
    deckTitle: {
        fontSize: 20,
        paddingBottom: 3
    }
});
