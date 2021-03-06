import { colors } from './colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 30,
    },
    asphaltCard: {
        backgroundColor: colors.ASPHALT,
        textAlign: 'center',
        marginBottom: 20,
        padding: 15,
        borderRadius: 5,
    },
    asphaltCardTitle: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    asphaltCardBody: {
        color: colors.WHITE,
    },
    button: {
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center'
    },
    successButton: {
        backgroundColor: colors.GREEN,
    },
    dangerButton: {
        backgroundColor: colors.RED
    },
    infoButton: {
        backgroundColor: colors.BLUE
    },
    buttonText: {
        color: colors.WHITE,
        fontSize: 15
    },
    formInput: {
        backgroundColor: colors.WHITE,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: colors.GRAY,
        marginBottom: 15,
        padding: 15,
    },
    textLable: {
        backgroundColor: colors.RED,
        color: colors.WHITE,
        marginVertical: 15,
        borderRadius: 5,
        padding: 5,
        alignSelf: 'flex-start'
    },
    resultText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 20
    }
});

export const headerStyles = {
    headerStyle: {
        backgroundColor: colors.BLUE,
    },
    headerTintColor: colors.WHITE,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}
