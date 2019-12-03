import {GET_USER_DATA} from '../../Actions/types';
const INITIAL_STATE = {
    userData: []
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload } = action;
    switch (type) {
        case GET_USER_DATA: {
            return {
                ...state,
                userData: payload
            }
        }
        default:
            return state
    }
}
