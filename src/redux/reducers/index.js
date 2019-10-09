import { ADD_CHARACTERISTICS } from "../constants/action-types"

const initialState = {
  characteristics: {}
};

const rootReducer = (state = initialState, action) => {
  if (action.types === ADD_CHARACTERISTICS) {
    const charSelector = action.payload.charSelector
    return Object.assign({}, state, {
      characteristics: state.characteristics[charSelector](action.payload.charValue)
    })
  }
  return state;
};


export default rootReducer;