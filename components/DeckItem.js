import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../helpers/styles';

export default class DeckItem extends Component {
    deckPressed(title) {
        this.props.onDeckPressed(title);
    }

    render() {
        const {item} = this.props;

        return (
            <View style={styles.asphaltCard}>
                <TouchableOpacity onPress={() => this.deckPressed(item.title)}>
                    <Text style={styles.asphaltCardTitle}>{item.title}</Text>
                    <Text style={styles.asphaltCardBody}>{item.questions.length} cards</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
