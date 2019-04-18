// Import the actions types constant we defined in our actions
import { PENDING_WEATHER_CURRENT, SUCCESS_WEATHER_CURRENT, ERROR_WEATHER_CURRENT } from "../../actions/weather/weatherAction";
import { PENDING_WEATHER_FORECAST, SUCCESS_WEATHER_FORECAST, ERROR_WEATHER_FORECAST } from "../../actions/weather/weatherAction";

let dataState = { current: [], loading: true, forecast: [] };

export default weatherReducer = (state = dataState, action) => {
    switch (action.type) {
        case SUCCESS_WEATHER_CURRENT:
        state = Object.assign({}, state, { current: action.current, loading: false });
            return state;
        case SUCCESS_WEATHER_FORECAST:
            state = Object.assign({}, state, { forecast: action.forecast, loading: false });
            return state;
        default:
            return state;
    }
};