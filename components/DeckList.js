import DeckItem from './DeckItem';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { receiveDecks } from '../actions';
import { styles, headerStyles } from '../helpers/styles';
import { getDecks } from '../helpers/storage';
import { FlatList, Text, View, ScrollView } from 'react-native';

class DeckList extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        getDecks().then((decks) => dispatch(receiveDecks(decks)));
    };

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Deck List',
            ...headerStyles
        }
    };

    deckPressed = (title) => {
        console.log(title)
        this.props.navigation.navigate('Deck', {
            deckId: title
        });
    }

    renderItem = ({item}) => {
        return (
            <DeckItem item={item} onDeckPressed={this.deckPressed}/>
        );
    };

    render() {
        const {decks} = this.props;
        const deckList = Object.entries(decks).map(deck => {
            return {
                title: deck[1].title,
                key: deck[1].title,
                questions: deck[1].questions
            }
        });

        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <FlatList data={deckList}
                              renderItem={this.renderItem}/>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList);
