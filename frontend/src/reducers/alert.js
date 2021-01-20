//takes in state that has to do with Alerts and calls and action
import { SET_ALERT, REMOVE_ALERT } from '../actions/types'
const initialState = []; //alerts array

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type){
      case SET_ALERT:
        return [...state, payload]
      case REMOVE_ALERT:
        return state.filter(alert => alert.id !== payload)

  }
}
