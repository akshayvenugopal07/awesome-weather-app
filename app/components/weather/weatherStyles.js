import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    currentWeather: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
        height: '40%'
    },
    currentImage: {
        width: 100, 
        height: 100
    },
    curentStatus: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "600",
    },
    forecastWeather: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateTitle: {
        fontSize: 15,
        fontWeight: "600",
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    forecastWeatherItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: '#2B3650',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    forecastImage: {
        width: 20,
        height: 20
    },
    title: {
        fontSize: 14,
    },
    time: {
        fontSize: 14,
    }, 
    bottomContainer: {
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    button: {
        width: "100%",
        height: '5%'
    }
});