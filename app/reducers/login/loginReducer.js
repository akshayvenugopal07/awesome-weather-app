// Import the actions types constant we defined in our actions
import { USER_SUCCESS } from "../../actions/login/loginAction";

let dataState = { data: [], loggedIn: false };

export default loginReducer = (state = dataState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            state = Object.assign({}, state, { data: action.data, loggedIn: true });
            return state;
        default:
            return state;
    }
};