import React from 'react';
import * as actions from '../actions';
import { connect } from "react-redux";
import * as storage from '../helpers/storage';
import { headerStyles, styles } from "../helpers/styles";
import { Keyboard, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

class AddDeck extends React.Component {
    state = {
        title: ''
    };

    static navigationOptions = () => {
        return {
            title: 'Add New Deck',
            ...headerStyles
        }
    };

    submit = () => {
        if (!this.state.title) {
            return alert('The title is empty!');
        }
        const {dispatch} = this.props;

        dispatch(actions.addDeck(this.state.title));
        storage.addDeck(this.state.title);

        this.setState({title: ''});
        Keyboard.dismiss();
        this.props.navigation.navigate('Deck', {deckId: this.state.title});
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    <TextInput
                        style={styles.formInput}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                        placeholder='Deck Title'
                    />
                    <TouchableOpacity
                        style={[styles.button, styles.infoButton]}
                        onPress={this.submit}>
                        <Text style={styles.buttonText}>Add deck</Text>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    }
}

export default connect()(AddDeck);
