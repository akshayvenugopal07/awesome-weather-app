'use strict';

import React, { Component } from 'react';
import { FlatList, View, Text, ActivityIndicator, Image, Button, ScrollView } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Moment from 'moment';

// Import your actions
import * as Actions from '../../actions/weather/weatherAction';

// Import your styles
import styles from './weatherStyles';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = { iconList: [] };

        this.renderItem = this.renderItem.bind(this);
        this.convertKelvinToCelsius = this.convertKelvinToCelsius.bind(this);
        this.onPressTutorial = this.onPressTutorial.bind(this);
        this.showDateForcastWeather = this.showDateForcastWeather.bind(this);
    }

    componentDidMount() {
        this.getLocationPermission();
    }

    async getLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Awesome weather App location Permission',
                    message: 'Awesome weather App needs access to your location so you can see the weather.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the location');
                this.getLocation();
            } else {
                console.log('location permission denied');
                this.goBack();
            }
        } catch (err) {
            console.warn(err);
            this.goBack();
        }
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            position => {
                let path = '&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
                this.props.getCurrentWeatherData(path);
                this.props.getForecastWeatherData(path);
            },
            error => this.getDefaultLocation(),
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 0, distanceFilter: 10 }
        );
    }

    getDefaultLocation() {
        let path = '&lat=9.9&lon=76.2';
        this.props.getCurrentWeatherData(path);
        this.props.getForecastWeatherData(path); 
    }

    goBack() {
        this.props.navigation.navigate('Login');
    }

    convertKelvinToCelsius(kelvin) {
        if (kelvin < (0)) {
            return 'below absolute zero (0 K)';
        } else {
            return (kelvin - 273.15);
        }
    }

    onPressTutorial() {
        this.props.navigation.navigate('Home');
    }

    getPath(status) {
        var icon =
            (status == "clear sky") ? require('../../../assets/imgs/sunny.png') :
            (status == "few clouds") ? require('../../../assets/imgs/cloudy.png') :
            (status == "scattered clouds") ? require('../../../assets/imgs/clouds.png') :
            (status == "broken clouds") ? require('../../../assets/imgs/cloud.png') :
            (status == "shower rain") ? require('../../../assets/imgs/umbrellas.png') :
            (status == "light rain") ? require('../../../assets/imgs/rain.png') :
            (status == "rain") ? require('../../../assets/imgs/rain.png') :
            (status == "moderate rain") ? require('../../../assets/imgs/rain.png') :
            (status == "thunderstorm") ? require('../../../assets/imgs/storm.png') :
            (status == "snow") ? require('../../../assets/imgs/snowflake.png') :
            (status == "mist") ? require('../../../assets/imgs/wind.png') :
            (status == "haze") ? require('../../../assets/imgs/fog.png') :
            null;
        return icon;
    }

    render() {

        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {
            return (
                < View style = { styles.mainContainer } >
                    <View style={styles.currentWeather}>
                        <Text style={styles.curentStatus}>
                            {this.convertKelvinToCelsius(this.props.current.main.temp)} Degree Celcius
                            </Text>
                        <Image source={this.getPath(this.props.current.weather[0].description)} style={styles.currentImage} />
                        <Text style={styles.curentStatus}>
                            {this.props.current.weather[0].main} - {this.props.current.name}
                        </Text>
                    </View>
                    <ScrollView style={{ height: '60%', flex: 1 }}>
                        {this.showDateForcastWeather(this.props.forecast)}
                    </ScrollView>
                    <View style={styles.bottomContainer}>
                        <Button
                            style={styles.button}
                            onPress={this.onPressTutorial}
                            title="Tutorial"
                            color="skyblue"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View >
            );
        }
    }

    showDateForcastWeather(items) {
        let arrayOfForecast = [];
        for (var weather in items) {
            arrayOfForecast.push(items[weather]);
        }
        return arrayOfForecast.map((weather) => {
            return (
                <View style={styles.forecastWeather}>
                    <Text style={styles.dateTitle}>{Moment(weather[0].dt_txt).format('LL')}</Text>
                    <View style={styles.listContainer}>
                        <FlatList
                            ref='listRef'
                            data={weather}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index} />
                    </View>
                </View>
            )
        })
    }

    renderItem({ item, index }) {
        return (
            <View style={styles.forecastWeatherItem}>
                <Image source={this.getPath(item.weather[0].description)} style={styles.forecastImage} />
                <Text style={styles.title}>{item.weather[0].main}</Text>
                <Text style={styles.time}>{Moment(item.dt_txt).format('LT')}</Text>
            </View>
        )
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.weatherReducer.loading,
        current: state.weatherReducer.current,
        forecast: state.weatherReducer.forecast
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);