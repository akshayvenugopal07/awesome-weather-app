// Import the actions types constant we defined in our actions
import { DATA_AVAILABLE } from "../../actions/home/homeAction";

let dataState = { data: [], loading: true };

export default homeReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading: false });
            return state;
        default:
            return state;
    }
};