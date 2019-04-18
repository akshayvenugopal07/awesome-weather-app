export const USER_SUCCESS = 'USER_SUCCESS';

// Import the sample data
import Data from '../../../assets/json/login.json';

export function getLogin() {
    return (dispatch) => {
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data = Data;
            dispatch({ type: USER_SUCCESS, data: data });
        }, 2000);

    };
}