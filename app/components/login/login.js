'use strict';

import React, { Component } from 'react';
import { View, Button, Image, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions/login/loginAction';

import styles from './loginStyles';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.onPressLogin = this.onPressLogin.bind(this);
    }

    onPressLogin() {
        if ((this.state.username) && (this.state.password)) {
            this.props.getLogin();
        } else {
            alert("Please enter all feilds");
        }
    }

    shouldComponentUpdate(props, state) {
        if (props.data.status) {
            alert("Logged in as " + props.data.data.first + " " + props.data.data.last + ' username is ' + this.state.username);
            this.props.navigation.navigate('Weather');
        } else {
            return false;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageView} source={require('../../../assets/imgs/moon.png')} />
                </View>
                <View style={styles.textConatiner}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ username: text })}
                        value={this.state.username}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        onPress={this.onPressLogin}
                        title="Login"
                        color="skyblue"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.loginReducer.loading,
        data: state.loginReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
