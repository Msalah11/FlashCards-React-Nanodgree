import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../helpers/styles';

export default class DeckItem extends Component {
    render() {
        const {item} = this.props;

        return (
            <View style={styles.asphaltCard}>
                <Text style={styles.asphaltCardTitle}>{item.title}</Text>
                <Text style={styles.asphaltCardBody}>{item.questions.length} cards</Text>
            </View>
        );
    }
}
