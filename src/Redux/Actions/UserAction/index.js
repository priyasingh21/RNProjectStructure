import { GET_USER_DATA } from '../types';
import { BASE_URL } from '../../../Helper';

const getUserData = () => {
    return (dispatch, getState) => {
        return fetch(BASE_URL + 'users')
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: GET_USER_DATA,
                    payload: res
                });
                return Promise.resolve(true);
            })
            .catch(err => {
                return Promise.resolve(false);
            })
    }
};

export {
    getUserData
}
