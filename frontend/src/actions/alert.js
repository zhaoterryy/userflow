import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid'
//dispatch comes from THUNK middleware
export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    })


}