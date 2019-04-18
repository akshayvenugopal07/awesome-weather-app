import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './app/components/home/home';
import Login from './app/components/login/login';
import Weather from './app/components/weather/weather';

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Login: Login,
        Weather: Weather
    },
    {
        initialRouteName: "Login",
        headerMode: 'none'
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;