import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as storage from '../helpers/storage';
import { NavigationActions } from 'react-navigation';
import {headerStyles, styles} from "../helpers/styles";
import {TouchableOpacity, ScrollView, Text, View, TextInput, Keyboard} from 'react-native';

class AddCard extends React.Component {

    state = {
        question: '',
        answer: ''
    };

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Add New Card To ' + navigation.state.params.deckId,
            ...headerStyles
        }
    };

    submit = () => {
        if (!this.state.question && !this.state.answer) {
            return alert('You have to fill out both fields!');
        }
        const {dispatch, navigation} = this.props;

        dispatch(actions.addCardToDeck(navigation.state.params.deckId, this.state.question, this.state.answer));
        storage.addCardToDeck(navigation.state.params.deckId, this.state.question, this.state.answer);

        this.setState({question: '', answer: ''});
        Keyboard.dismiss();
        this.props.navigation.dispatch(NavigationActions.back());
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    <TextInput
                        style={styles.formInput}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                        placeholder='Question'
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                        placeholder='Answer'
                    />

                    <TouchableOpacity
                        style={[styles.button, styles.infoButton]}
                        onPress={this.submit}>
                        <Text style={styles.buttonText}>Add card</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default connect()(AddCard);
