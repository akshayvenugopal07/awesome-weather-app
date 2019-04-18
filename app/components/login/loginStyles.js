import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    imageContainer: {
        height: '30%', 
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
        alignItems: 'center'
    },
    imageView: {
        height: 80, 
        width: 80
    },
    textConatiner: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: { 
        height: 40, 
        width: '80%', 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginTop: 5, 
        marginBottom: 5 
    },
    buttonContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 50
    }
});