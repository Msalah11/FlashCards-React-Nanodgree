import React from 'react';
import {TouchableOpacity, ScrollView, Text, View} from 'react-native';
import {headerStyles, styles} from "../helpers/styles";
import { connect } from 'react-redux';

class Deck extends React.Component {
    state = {
        deck: null
    };

    static navigationOptions = ({navigation}) => {
        const {deckId} = navigation.state.params;
        return {
            title: deckId,
            ...headerStyles
        }
    };

    componentDidMount() {
        const {decks, navigation} = this.props;

        const deck = Object.entries(decks).find(
            deck => {
                return deck[1].title === navigation.state.params.deckId;
            }
        );

        this.setState({deck: deck[1]});
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.deck &&
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.contentContainer}>

                        <View style={styles.asphaltCard}>
                            <Text style={styles.asphaltCardTitle}>{this.state.deck.title}</Text>
                            <Text style={styles.asphaltCardBody}>{this.state.deck.questions.length} cards</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={[styles.button, styles.successButton]}
                                onPress={() => this.props.navigation.navigate(
                                    'AddCard',
                                    {deckId: this.state.deck.title}
                                )}>
                                <Text style={styles.buttonText}>Add card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.dangerButton]}
                                onPress={() => this.props.navigation.navigate(
                                    'Quiz',
                                    {deckId: this.state.deck.title}
                                )}>
                                <Text style={styles.buttonText}>Start quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                }
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Deck);
