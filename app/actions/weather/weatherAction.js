export const PENDING_WEATHER_CURRENT = 'PENDING_WEATHER_CURRENT';
export const SUCCESS_WEATHER_CURRENT = 'SUCCESS_WEATHER_CURRENT';
export const ERROR_WEATHER_CURRENT = 'ERROR_WEATHER_CURRENT';

export const PENDING_WEATHER_FORECAST = 'PENDING_WEATHER_FORECAST';
export const SUCCESS_WEATHER_FORECAST = 'SUCCESS_WEATHER_FORECAST';
export const ERROR_WEATHER_FORECAST = 'ERROR_WEATHER_FORECAST';

import * as ApiService from '../../services/apiService';

export function getCurrentWeatherData(latLang) {
    return (dispatch) => {
        let path = `weather?appid=30506e7d46f91a64ea96efde7aaac830` + latLang;
        ApiService.getRequest(path)
            .then(resp => {
                if (resp.status == 200) {
                    dispatch({ type: SUCCESS_WEATHER_CURRENT, current: resp.data });
                } else {
                    dispatch({ type: ERROR_WEATHER_CURRENT, current: [] });
                }
            });
    };
}

export function getForecastWeatherData(latLang) {
    return (dispatch) => {
        let path = `forecast?appid=30506e7d46f91a64ea96efde7aaac830` + latLang;
        ApiService.getRequest(path)
            .then(resp => {
                if (resp.status == 200) {
                    const dateData = {
                        1: [],
                        2: [],
                        3: [],
                        4: [],
                        5: []
                    };
                    const today = new Date().getTime();
                    resp.data.list.forEach(item => {
                        var futureDate = new Date((item.dt) * 1000).getTime();
                        var timeDiff = Math.abs(futureDate - today);
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                        dateData[diffDays].push(item);
                    });
                    dispatch({ type: SUCCESS_WEATHER_FORECAST, forecast: dateData });
                } else {
                    dispatch({ type: ERROR_WEATHER_FORECAST, forecast: [] });
                }
            });
    };
}