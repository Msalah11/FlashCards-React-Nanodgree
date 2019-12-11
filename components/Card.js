import React from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import { styles } from '../helpers/styles';

export default function Card(props) {

    const {index, showQuestion, questions, onQuestionPress, onButtonPress} = props,
        question = questions[index].question,
        answer = questions[index].answer;

    return (
        <View style={styles.container}>
            <View style={styles.asphaltCard}>
                <Text style={styles.textLable}>{index + 1} / {questions.length}</Text>
                <Text style={styles.asphaltCardTitle}>
                    {showQuestion ? question : answer }
                </Text>
                <TouchableOpacity
                    onPress={onQuestionPress}
                    style={[styles.button, styles.infoButton]}>
                    <Text style={styles.buttonText}>Show { showQuestion ? 'Answer' : 'Question' }</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TouchableOpacity
                    style={[styles.button, styles.successButton]}
                    onPress={() => onButtonPress(true)}>
                    <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.dangerButton]}
                    onPress={() => onButtonPress(false)}>
                    <Text style={styles.buttonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

