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
